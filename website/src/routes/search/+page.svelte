<script lang="ts">
	// components
	import HeroSearch from '$lib/components/Hero/index.svelte';
	import ExploreBots from '$lib/components/Explore/Bots.svelte';
	import MetaHead from '$lib/components/Head.svelte';

	// imports
	import type { PageData } from './$types';

	// props
	export let data: PageData;
</script>

<MetaHead title={`Search "${data.query}"`} />
<HeroSearch query={data.query} />
<ExploreBots
	bots={data.bots}
	description={`Your Search Parameters were, ${data.query ? `Query: "${data.query}"` : ''} ${
		data.tag ? `Tag: "${data.tag}"` : ''
	}`}
	heading="Search Results..."
/>
