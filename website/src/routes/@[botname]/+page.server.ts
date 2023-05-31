// imports
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import md from 'showdown';

// get bot data
export const load = (async ({ fetch, params }) => {
	// name
	const botName = params.botname;
	const req = await fetch(`/api/bots/${botName}`);
	const data = await req.json();

	// error check
	if (!(req.status == 200)) {
		throw error(404, { message: 'Bot Not Found.' });
	}

	// data
	const botData = data.bot;
	const ownerData = data.owner;

	// md to html
	const MD_CV = new md.Converter();
	const htm = MD_CV.makeHtml(botData.description);
	botData.description = htm;

	// send data
	return { bot: botData, owner: ownerData };
}) satisfies PageServerLoad;
