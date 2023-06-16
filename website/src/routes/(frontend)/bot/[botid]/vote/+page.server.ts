// imports
import type { PageServerLoad, Actions, RequestEvent } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import DB from '$lib/server/database';
import ms from 'ms';
import type { User } from '@prisma/client';

// get bot data
export const load = (async ({ fetch, params }: any) => {
	// values
	const botId = params.botid;

	/* get bot */
	const req = await fetch(`/api/bots/${botId}`);
	const data = await req.json();

	// error check
	if (!(req.status == 200)) {
		throw error(404, { message: 'Bot Not Found' });
	}

	// send data
	return { bot: data.bot };
}) satisfies PageServerLoad;

// vote actions
export const actions = {
	default: async ({ request }: RequestEvent) => {
		// get values
		const form = await request.formData();
		const userID = form.get('user') as string;
		const botID = form.get('bot') as string;

		// get user
		const user = await DB.user
			.findUnique({
				where: {
					id: userID
				}
			})
			.catch(() => {
				return fail(500, { success: false, error: 'Unable to contact database' });
			});
		if (!user) {
			throw error(401, { message: 'Not auth?' });
		}

		// get vote req
		const voteReq = await DB.vote
			.findFirst({
				where: {
					botIdentifier: botID,
					voterIdentifier: (user as User).identifier
				}
			})
			.catch(() => {
				return fail(500, { success: false, error: 'Unable to contact database' });
			});
		if (voteReq && !userCanVote(voteReq)) {
			return fail(400, { message: 'You cannot vote now' });
		}

		// update bot
		await DB.bot
			.update({
				where: {
					identifier: botID
				},
				data: {
					votes: {
						increment: 1
					}
				}
			})
			.catch(() => {
				return fail(500, { success: false, error: 'Unable to contact database' });
			})
			.then(async () => {
				// update vote
				await DB.vote.upsert({
					where: {
						botIdentifier_voterIdentifier: {
							botIdentifier: botID,
							voterIdentifier: (user as User).identifier
						}
					},
					update: {
						time: new Date()
					},
					create: {
						botIdentifier: botID,
						voterIdentifier: (user as User).identifier
					}
				});
			})
			.finally(() => {
				throw redirect(302, `/bot/${botID}?message=Voted Done`);
			});
	}
} satisfies Actions;

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
