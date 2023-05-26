// imports
import { redirect, error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// redirect to invite link of bot
export const load = (({ params }) => {
	if (params.botname) {
		throw redirect(308, params.botname);
	} else {
		throw error(404, 'Bot not found');
	}
}) satisfies PageServerLoad;
