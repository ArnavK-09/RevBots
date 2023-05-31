// imports
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /api/
export const GET = (() => {
	throw redirect(301, '/');
}) satisfies RequestHandler;
