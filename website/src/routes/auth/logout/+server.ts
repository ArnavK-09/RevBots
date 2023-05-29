// imports
import { redirect,text } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// GET /auth/logout
export const GET = (async({cookies}) => {
  cookies.delete("revAuth")
throw redirect(303,"/")
}) satisfies RequestHandler;
