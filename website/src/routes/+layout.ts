// imports
import type { LayoutLoad } from './$types';

// csr
export const ssr = false;

// loader
export const load = (async ({ fetch, cookies }: any) => {
	const response = await fetch(`/api/me`);
	return response.json();
}) satisfies LayoutLoad;
