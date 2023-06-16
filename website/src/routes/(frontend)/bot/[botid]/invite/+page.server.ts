// imports
import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import DB from '$lib/server/database';

// redirect to invite link of bot
export const load = (async ({ params }) => {
	if (!params.botid) {
		throw error(400, { message: 'Bot Id Not Provided' });
	}
	const botOnDB = await DB.bot
		.findUnique({
			where: {
				identifier: params.botid
			},
			select: {
				invite: true
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact database' });
		});

	// validate
	if (!botOnDB) {
		throw error(404, { message: 'Bot Not Found' });
	}
	// bot there
	throw redirect(308, botOnDB.invite);
}) satisfies PageServerLoad;
