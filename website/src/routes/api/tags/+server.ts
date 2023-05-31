// imports
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { Tag as TagList } from '@prisma/client';

// GET /api/tags
export const GET = (() => {
	// all tags
	const JSONTagsList = JSON.parse(JSON.stringify(TagList));
	const tags = Object.keys(TagList).map((key) => {
		return JSONTagsList[key];
	});
	// send response
	return json({ tags });
}) satisfies RequestHandler;
