// imports
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /api/bots
export const GET = (({ cookies }) => {
	cookies.delete('revAuth');
	throw redirect(303, '/');
}) satisfies RequestHandler;
