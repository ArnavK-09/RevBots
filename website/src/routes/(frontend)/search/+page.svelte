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

<MetaHead
	title={`Your Search - ${data.query ? `Query: "${data.query}"` : ''} ${
		data.tag ? `Tag: "${data.tag}"` : ''
	}`}
/>
<HeroSearch query={data.query} />
{#if !(data.bots.length == 0)}
	<ExploreBots
		bots={data.bots}
		description={`Your Search Parameters were, ${data.query ? `Query: "${data.query}"` : ''} ${
			data.tag ? `Tag: "${data.tag}"` : ''
		}`}
		heading="Search Results..."
	/>
{:else}
	<section class="flex h-48 items-center justify-center">
		<h3 class="tracking-wide text-2xl md:text-4xl text-gray-200 font-medium">No Bots Found :(</h3>
	</section>
{/if}
