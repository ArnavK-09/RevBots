// imports
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import DB from '$lib/server/database';
import { decrypt } from '$lib/server/modules/JWA';

// GET /api/me
export const GET = (async ({ cookies }) => {
	// get user uid
	const _auth = cookies.get('revAuth');
	// if
	if (!_auth) {
		return json({ user: null });
	}

	// if
	const auth: string | null = decrypt(_auth.toString());
	if (!auth) {
		return json({ user: null });
	}
	// get user data
	const user = await DB.user
		.findUnique({
			where: {
				id: auth.toString()
			}
		})
		.catch(() => {
			return json({ user: null });
		});

	return json({ user: user });
}) satisfies RequestHandler;
