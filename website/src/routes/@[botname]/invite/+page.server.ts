// imports
import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import DB from '$lib/server/database';

// redirect to invite link of bot
export const load = (async ({ params }) => {
	if (!params.botname) {
		throw error(400, { message: 'Bot Id Not Provided' });
	}
	const botOnDB = await DB.bot
		.findUnique({
			where: {
				username: params.botname
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact database' });
		});
	// bot there
	throw redirect(308, botOnDB.invite);
}) satisfies PageServerLoad;
