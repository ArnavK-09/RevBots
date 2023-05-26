// imports
import type { Handle } from '@sveltejs/kit';
import axios from 'axios';

// handler
export const handle = (async ({ event, resolve }: any) => {
	console.log('here', event.cookies.getAll());
	// fetch user
	const user = await axios
		.get('/api/@me?auth=', event.cookies.get('revAuth'))
		.catch(async () => await resolve(event));
	event.locals.user = user;
	const response = await resolve(event);
	return response;
}) satisfies Handle;
