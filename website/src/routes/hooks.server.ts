import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	//event.locals.user = 'TEST';
	console.log(event, event.cookies.getAll());
	const response = await resolve(event);
	//response.headers.set('x-custom-header', 'potato');

	return response;
}) satisfies Handle;
