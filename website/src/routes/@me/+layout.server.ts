// imports
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
// middleware
export const load = ((ev) => {
	// check
	console.log(ev.cookies.getAll());
	/*if (cookies.get('revAuth')) {
		throw redirect(307, '/auth/login');
	}*/
}) satisfies LayoutServerLoad;
