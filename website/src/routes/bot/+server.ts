// imports
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /discord
export const GET = (() => {
	throw redirect(301, 'https://app.revolt.chat/bot/01H08716FW8WXP2RGH98S5VSXJ');
}) satisfies RequestHandler;
