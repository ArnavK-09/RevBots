// imports
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

// get bot data
export const load = (async ({ fetch, params }) => {
	// name
	const botName = params.botname;
	const bot = await fetch(`/api/bots/${botName}`);

	// error check
	if (!(bot.status == 200)) {
		throw error(404, { message: 'Bot Not Found.' });
	}

	return bot.json();
}) satisfies PageServerLoad;
