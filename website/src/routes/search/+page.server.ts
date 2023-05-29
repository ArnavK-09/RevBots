// imports
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	// get query
	const query = url.searchParams.get('query');
}) satisfies PageServerLoad;
