// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';

// GET /api/bots/[id]
export const GET = (async ({ params }: any) => {
	// get bot
	const selectedBot = await DB.bot
		.findUnique({
			where: {
				username: params.id
			}
		})
		.catch(() => {
			throw error(500, {
				message: 'Unable to contact Database'
			});
		});
	if (!selectedBot) {
		throw error(404, {
			message: 'Bot Not Found'
		});
	}
	// get user
	const owner = await DB.user
		.findUnique({
			where: {
				id: selectedBot.ownerId
			}
		})
		.catch(() => {
			throw error(500, {
				message: 'Unable to contact Database'
			});
		});
	if (!owner) {
		throw error(500, {
			message: 'Owner not found'
		});
	}
	// return
	return json({ bot: selectedBot, owner });
}) satisfies RequestHandler;
