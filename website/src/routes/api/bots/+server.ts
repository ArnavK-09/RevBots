// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';

// GET /api/bots?sort
export const GET = (async ({ url }) => {
	// await DB.bot.deleteMany({})
	const sortBy = url.searchParams.get('sort')?.toLowerCase().trim();
	let wSortBy: any;
	// config sort
	switch (sortBy) {
		case 'newest': {
			wSortBy = {
				publishedOn: 'asc'
			};
			break;
		}
		default: {
			wSortBy = {
				votes: 'desc'
			};
		}
	}
	// get data from db
	const bots = await DB.bot
		.findMany({
			where: {
				status: 'ACTIVE'
			},
			orderBy: wSortBy
		})
		.catch(() => {
			throw error(500, { message: 'Failed to contact Database' });
		});
	return json(bots);
}) satisfies RequestHandler;
