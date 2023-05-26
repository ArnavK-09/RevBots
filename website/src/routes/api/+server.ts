// imports
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /api/bots
export const GET = (() => {
	return json({ hmm: true });
}) satisfies RequestHandler;
