// imports
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// middleware
export const load = (({cookies}) => {
	// check
	console.log( cookies.getAll());
	if (cookies.get('revAuth')) {
		throw redirect(307, '/auth/login');
	}
}) satisfies LayoutServerLoad;
