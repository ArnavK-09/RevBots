// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';

// GET /api/bots
export const GET = (async () => {
	//	await DB.bot.deleteMany({})
	const bots = await DB.bot.findMany().catch(() => {
		throw error(500, { message: 'Failed to contact Database' });
	});
	return json(bots);
}) satisfies RequestHandler;
