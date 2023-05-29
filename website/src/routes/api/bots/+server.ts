// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';
import { decrypt } from '$lib/server/modules/JWA';
import axios from 'axios';

// GET /api/bots
export const GET = (async () => {
	//await DB.bot.deleteMany({})
	const bots = await DB.bot.findMany();
	return json(bots);
}) satisfies RequestHandler;

// POST /api/bots
export const POST = (async ({ request, cookies }) => {
	/* Add bot */
	const body = await request.json();
	const data = body.data;
	const owner = decrypt(cookies.get('revAuth'));
	console.log('post');
	// validate
	if (!(data.id || owner || data.longDescription || data.invite || data.prefix || data.github)) {
		throw error(400, { message: 'Missing Params' });
	} else if (!(data.id.length == 26)) {
		throw error(400, { message: 'Identifier Must be of 26 characters' });
	} else if (data.longDescription.trim().length < 10) {
		throw error(400, { message: 'Long description must be min 10 chracters' });
	} else if (data.github.trim().length < 3 || !data.github.includes('/')) {
		throw error(400, { message: 'Invalid Github Repo' });
	}

	// check if bot exists
	const botOnDB = await DB.bot.findUnique({
		where: {
			identifier: data.id.trim().toUpperCase()
		}
	});
	if (botOnDB) {
		return json(botOnDB);
	}

	// fetch username
	const bot = await axios.get(`https://api.revolt.chat/bots/${data.id}/invite`).catch(() => {
		throw error(400, { message: 'Unable to fetch bot on revolt' });
	});

	// fetch revolt bot data
	const revoltBotData: any = await axios
		.get(`https://api.revolt.chat/users/${data.id.trim().toUpperCase()}`, {
			headers: {
				'X-Bot-Token': 'dGME8er_oQb15xcW4qLHgJ9uBYywYg2GmkitrEUKkLANzCH5CYX5Km-qhCsFEvsd'
			}
		})
		.catch((e) => {
			throw error(403, { message: 'Unable to fetch revolt bot' });
		});
	// create bot
	const botData = {
		username: bot.data.username,
		identifier: data.id,
		avatar: `https://autumn.revolt.chat/avatars/${revoltBotData.data.avatar._id}/${revoltBotData.data.avatar.filename}`,
		description: data.longDescription,
		shortDescription: data.shortDescription || undefined,
		github: data.github,
		prefix: data.prefix,
		website: data.site,
		support: data.server,
		invite: data.invite,
		owner: { connect: { id: owner } }
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
