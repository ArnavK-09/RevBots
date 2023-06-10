// imports
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /discord
export const GET = (() => {
	throw redirect(301, '/@RevBots/invite');
}) satisfies RequestHandler;
