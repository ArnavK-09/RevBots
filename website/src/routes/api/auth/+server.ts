// imports
import CryptoJS from 'crypto-js';
import { error, json } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';
import { encrypt } from '$lib/server/modules/JWA';
import axios from 'axios';

/* Helper functions*/
const genCode = (): string => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let uniqueId = '';

	while (uniqueId.length < 7) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		const randomCharacter = characters.charAt(randomIndex);
		uniqueId += randomCharacter;
	}

	return uniqueId;
};

/* Auth Rest */

// POST /api/auth
export const POST = (async ({ request }: any) => {
	/* Begin login */
	const body = await request.json();
	const id = body.identifier.toUpperCase().trim();

	// validate
	if (!id && !(id.length == 226)) {
		throw error(400, { message: 'Invalid Identifier' });
	}

	// if already a pending req
	try {
		const pendingRequest = await DB.request.findUnique({
			where: {
				user: id
			}
		});
		if (pendingRequest) {
			return json(pendingRequest);
		}
	} catch {
		throw error(500, {
			message: 'Failed to contact database'
		});
	}

	// create request
	try {
		const requestCreated = await DB.request.create({
			data: {
				code: genCode(),
				user: id,
				status: true // TODO remove
			}
		});
		return json(requestCreated);
	} catch {
		throw error(500, {
			message: 'Failed To Create Request'
		});
	}
}) satisfies RequestHandler;

// GET /api/auth
export const GET = async ({ url, cookies }: any) => {
	/* Verify user login, bot verified */
	const code = url.searchParams.get('code');
	// get code
	if (!code) {
		throw error(400, { message: 'Code not provided' });
	}
	// find request
	const requestOnDB = await DB.request
		.findUnique({
			where: {
				code: code
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact Database' });
			return;
		});

	// validate request
	if (!requestOnDB) {
		throw error(404, {
			message: 'Unable to fetch request with code provided'
		});
	} else if (!requestOnDB.status) {
		throw error(406, {
			message: 'Request not verified'
		});
	}

	// request valid
	const user = await DB.user.findUnique({
		where: {
			identifier: requestOnDB.user
		}
	});

	// if user not exist
	if (!user) {
		// fetch revolt user data
		const revoltUserData: any = await axios
			.get(`https://api.revolt.chat/users/${requestOnDB.user}`, {
				headers: {
					'X-Bot-Token': 'dGME8er_oQb15xcW4qLHgJ9uBYywYg2GmkitrEUKkLANzCH5CYX5Km-qhCsFEvsd'
				}
			})
			.catch((e) => {
				console.log(e);
				throw error(403, { message: 'Unable to fetch revolt profile' });
			});

		// create user
		const userData: any = {
			identifier: requestOnDB.user,
			username: revoltUserData.data.username
		};
		const createdUser = await DB.user.create({ data: userData }).catch(() => {
			throw error(500, { message: 'Error in creating new user' });
		});

		// return new user
		cookies.set('revAuth', encrypt(createdUser.id), {
			httpOnly: true,
			maxAge: 20 * 24 * 60 * 60
		});
		// delete req
		await DB.request
			.delete({
				where: {
					user: requestOnDB.user
				}
			})
			.catch((err: any) => console.log(err));
		// return user
		return json(createdUser);
	}
	// send user if exist
	cookies.set('revAuth', encrypt(user.id), {
		httpOnly: true,
		maxAge: 20 * 24 * 60 * 60
	});

	// delete req
	await DB.request
		.delete({
			where: {
				user: requestOnDB.user
			}
		})
		.catch((err: any) => console.log(err));
	return json(user);
};

/* PUT /api/auth
export const PUT = async (e) => {
	/* Continue login  i.e. Verify token (by bot) 
	const body: any = await e.parseBody();
	const code = body.code;
	const userID = body.identifier;
	const prisma = DB;

	// validate
	if (!body || !code || !userID) {
		e.json(400, {
			message: 'Invalid Params'
		});
		return;
	}

	// get request
	const requestOnDB = await prisma.request
		.findUnique({
			where: {
				code: code
			}
		})
		.catch(() => {
			e.json(500, {  message: 'Failed to contact database' });
			return;
		});

	// validate request
	if (!requestOnDB) {
		e.json(404, {
			message: 'Unable to fetch request with code provided'
		});
		return;
	}

	// check user
	if (userID.toUpperCase().trim().toString() !== requestOnDB.user.toString().trim().toUpperCase()) {
		e.json(400, {
			message: 'You are not the one who created that request'
		});
		return;
	}

	// all fine
	await prisma.request
		.update({
			where: {
				code: code
			},
			data: {
				status: true
			}
		})
		.then((data: any) => {
		return json({
				success: true,
				data
			});
		})
		.catch(() => {
			throw errorjson(500, { message: 'Unexpected error occurred' });
		});
};
*/
