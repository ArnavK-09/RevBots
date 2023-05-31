// imports
import type { RequestHandler } from './$types';
import DB from '$lib/server/database';
import { error, json } from '@sveltejs/kit';

// GET /api/search/bots?query
export const GET = (async ({ url }) => {
	/* Search bot by username or identifier */
	const query = url.searchParams.get('query')?.replace(' ', '');
	// get code
	if (!query) {
		throw error(400, { message: 'Bot query not provided' });
	}
	// get query on db
	const results = await DB.bot
		.findMany({
			where: {
				username: {
					search: query.toString()
				}
			}
		})
		.catch((e) => {
			console.log(`message`, e);
			throw error(500, {
				message: 'Unable to search from database'
			});
		});

	// send results
	return json(results);
}) satisfies RequestHandler;
