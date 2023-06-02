// imports
import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import { decrypt } from '$lib/server/modules/JWA';
import axios from 'axios';
import { env } from '$env/dynamic/private';

// GET /api/me/bots
export const GET = (async ({ cookies }) => {
	// get user uid
	const auth: string | null = decrypt(cookies.get('revAuth'));
	// if
	if (!auth) {
		throw error(401, { message: 'No auth?' });
	}

	// get user bots
	const userBots = await DB.bot
		.findMany({
			where: {
				ownerId: auth.toString()
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact database' });
		});

	return json(userBots);
}) satisfies RequestHandler;

// POST /api/me/bots
export const POST = (async ({ request, cookies }) => {
	/* Add bot */
	const body = await request.json();
	const data = body.data;
	const owner = decrypt(cookies.get('revAuth'));
	console.log(data);
	// validate
	if (
		!(data.identifier || owner || data.longDescription || data.invite || data.prefix || data.github)
	) {
		throw error(400, { message: 'Missing Params' });
	} else if (!(data.identifier.length == 26)) {
		throw error(400, { message: 'Identifier Must be of 26 characters' });
	} else if (data.longDescription.trim().length < 10) {
		throw error(400, { message: 'Long description must be min 10 chracters' });
	} else if (data.github.length < 3 || !data.github.includes('/')) {
		throw error(400, { message: 'Invalid Github Repo' });
	}
	// check if bot exists
	const botOnDB = await DB.bot.findUnique({
		where: {
			identifier: data.identifier.trim().toUpperCase()
		}
	});
	if (botOnDB) {
		return json(botOnDB);
	}

	// fetch username
	const bot = await axios
		.get(`https://api.revolt.chat/bots/${data.identifier.toString()}/invite`)
		.catch(() => {
			throw error(400, { message: 'Unable to fetch bot on revolt' });
		});

	// fetch revolt bot data
	const revoltBotData = await axios
		.get(`https://api.revolt.chat/users/${data.identifier.toUpperCase()}`, {
			headers: {
				'X-Bot-Token': env.BOT_TOKEN
			}
		})
		.catch(() => {
			throw error(403, { message: 'Unable to fetch revolt bot' });
		});

	// avatar
	let avatar = '/logo.png';
	if (revoltBotData.data.avatar) {
		avatar = `https://autumn.revolt.chat/avatars/${revoltBotData.data.avatar._id}/${revoltBotData.data.avatar.filename}`;
	}

	// create bot
	const botData = {
		username: bot.data.username,
		identifier: data.identifier,
		avatar: avatar,
		description: data.longDescription,
		shortDescription: data.shortDescription || undefined,
		github: data.github,
		prefix: data.prefix,
		website: data.site,
		support: data.server,
		invite: data.invite,
		tags: data.tags,
		votes: 69,
		owner: { connect: { id: owner!.toString() } }
	};
	const newBot = await DB.bot
		.create({
			data: botData
		})
		.catch((err) => {
			console.log(err);
			throw error(500, { message: 'Unable to create bot' });
		});

	return json(newBot);
}) satisfies RequestHandler;
