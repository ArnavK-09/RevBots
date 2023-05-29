<script>
	// imports
	import axios from 'axios';
	import { onMount } from 'svelte';

	// components
	import BotFilters from '$lib/components/Explore/Filters.svelte';
	import ExploreBots from '$lib/components/Explore/Bots.svelte';

	// get bots
	let bots = [];
	onMount(async () => {
		await axios
			.get('/api/bots')
			.then((e) => {
				bots = e.data;
			})
			.catch((err) => alert(err.message));
	});
</script>

<section>
	<BotFilters />
	<ExploreBots {bots} description="Most voted revolt bots..." heading="Top Revolt Bots" />
</section>
