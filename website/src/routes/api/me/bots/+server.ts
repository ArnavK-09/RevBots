// imports
import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import { decrypt } from '$lib/server/modules/JWA';

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
		.catch((e) => {
			throw error(500, { message: 'Unable to contact database' });
		});

	return json(userBots);
}) satisfies RequestHandler;
