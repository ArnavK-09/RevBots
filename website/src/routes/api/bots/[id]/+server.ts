// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';

// GET /api/bots/[id]
export const GET = (async ({ params }: any) => {
	const selectedBot = await DB.bot.findUnique({
		// where: { OR: [{ username: queryID }, { identifier: queryID }] },
		where: {
			username: params.id
		}
	});
	if (!selectedBot) {
		throw error(404, {
			message: 'Bot Not Found'
		});
	}

	return json(selectedBot);
}) satisfies RequestHandler;
