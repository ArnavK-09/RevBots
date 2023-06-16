// imports
import { json, error } from '@sveltejs/kit';
import DB from '$lib/server/database';
import type { RequestHandler } from './$types';
import { decrypt } from '$lib/server/modules/JWA';
import ms from 'ms';

// helper function
function userCanVote(vote: any) {
	const result = 86400000 - (Date.now() - new Date(vote.time).getTime());
	const fmtRes = ms(result, { long: true });
	if (result <= 0 || fmtRes.includes('-'))
		return {
			status: true,
			time_left: 'Time to vote now'
		};
	return {
		status: false,
		time_left: fmtRes
	};
}

// GET /api/bots/[id]/vote
export const GET = (async ({ params, cookies }: any) => {
	// data
	const botID = params.id;
	const voterID: any = decrypt(cookies.get('revAuth'));

	// validate
	if (!botID) {
		throw error(400, { message: 'Missing Params' });
	}
	// get user
	const voter = await DB.user
		.findUnique({
			where: {
				id: voterID
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact database' });
		});
	if (!voter) {
		throw error(401, { message: 'No user found' });
	}
	// get pending req
	const pendingRequest = await DB.vote
		.findFirst({
			where: {
				botIdentifier: botID,
				voterIdentifier: voter.identifier
			}
		})
		.catch(() => {
			throw error(500, { message: 'Unable to contact database' });
		});
	if (pendingRequest) {
		return json({ vote: pendingRequest, can_vote: userCanVote(pendingRequest) });
	}
	// if not pending req
	return json({
		vote: null,
		can_vote: {
			status: true,
			time_left: 'Time to vote now'
		}
	});
}) satisfies RequestHandler;
