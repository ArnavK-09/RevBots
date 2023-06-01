// imports
import type { PageServerLoad } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { Tag as TagList } from '@prisma/client';
import DB from '$lib/server/database';

// load search
export const load = (async ({ url }) => {
	// get quey
	let query = url.searchParams.get('query');

	// validate
	if (!query) {
		throw redirect(307, '/');
	}
	// pass args
	const [...args]: string[] = query.split(' ');
	const Uargs: { tag?: string } = Object.fromEntries(args.map((arg) => arg.split(':')));
	let tag: string | undefined = Uargs.tag;

	// all tags
	const JSONTagsList = JSON.parse(JSON.stringify(TagList));
	const tags = Object.keys(TagList).map((key) => {
		return JSONTagsList[key].toLowerCase();
	});

	// if tag doesn't exist$
	if (tag && !tags.includes(tag.toString().toLowerCase())) {
		tag = undefined;
	}
	query = query.replace(/tag:\w+\s?/, '').trim();
	// Db query
	const wQuery: any = {
		username: {
			mode: 'insensitive',
			contains: query
		},
		tags: {
			has: tag ? (tag as TagList) : null
		}
	};
	if (!tag) {
		delete wQuery.tags;
	}
	// get data from db
	const bots = await DB.bot
		.findMany({
			where: wQuery,
			select: {
				username: true,
				votes: true,
				shortDescription: true,
				avatar: true,
				tags: true
			}
		})
		.catch((ee) => {
			console.log(ee);
			throw error(500, { message: 'Unable to contact DB' });
		});
	// return value
	return { query, tag, bots };
}) satisfies PageServerLoad;
