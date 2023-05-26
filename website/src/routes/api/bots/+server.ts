// imports
import { json } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';

// GET /api/bots
export const GET = (async () => {
	const bots = await DB.bot.findMany();
	return json(bots);
}) satisfies RequestHandler;
