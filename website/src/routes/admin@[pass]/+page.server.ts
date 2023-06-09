// imports
import type { PageServerLoad, Actions } from './$types';
import { redirect, error, fail } from '@sveltejs/kit';
import DB from '$lib/server/database';
import { env } from '$env/dynamic/private';

// load search
export const load = (async ({ params }) => {
	// get quey
	const pass = params.pass;
	// validate
	if (!pass || !(pass === env.SECRET)) {
		throw redirect(307, '/');
	}

	// get data from db
	const bots = await DB.bot.findMany({}).catch(() => {
		throw error(500, { message: 'Unable to contact DB' });
	});

	// return value
	return { bots };
}) satisfies PageServerLoad;

// actions
export const actions = {
	status: async ({ request }: any) => {
		const data = await request.formData();
		const bot = data.get('identifier');
		const status = data.get('status');
		// update status
		await DB.bot
			.update({
				where: {
					identifier: bot
				},
				data: {
					status: status
				}
			})
			.catch((e) => {
				return fail(500, { success: false, error: e.message });
			})
			.then(() => {
				return { success: true };
			});
	},
	del: async ({ request }: any) => {
		const data = await request.formData();
		const bot = data.get('identifier');
		// delete bot
		await DB.bot
			.delete({
				where: {
					identifier: bot
				}
			})
			.catch((e) => {
				return fail(500, { success: false, error: e.message });
			})
			.then(() => {
				return { success: true };
			});
	},
	promote: async ({ request }: any) => {
		const data = await request.formData();
		const bot = data.get('identifier');
		const status = data.get('promoted');
		// update status
		await DB.bot
			.update({
				where: {
					identifier: bot
				},
				data: {
					promoted: status.toString().toLowerCase().trim() == 'true'
				}
			})
			.catch((e) => {
				return fail(500, { success: false, error: e.message });
			})
			.then(() => {
				return { success: true };
			});
	}
} satisfies Actions;
