<script lang="ts">
	// imports
	import axios from 'axios';
	import { onMount } from 'svelte';

	// components
	import ExploreBots from '$lib/components/Explore/Bots.svelte';

	// get bots
	let topBots: any[] = [];
	let newBots: any[] = [];
	onMount(async () => {
		/* top bots */
		await axios
			.get('/api/bots')
			.then((e) => {
				topBots = e.data;
			})
			.catch((err) => alert(err.message));
		/* latest bots */
		await axios
			.get('/api/bots?sort=newest')
			.then((e) => {
				newBots = e.data;
			})
			.catch((err) => alert(err.message));
	});
</script>

<section>
	<!-- <BotFilters /> -->
	<ExploreBots bots={topBots} description="Most voted revolt bots..." heading="Top Revolt Bots" />
	<ExploreBots bots={newBots} description="Latest revolt bots published..." heading="Newest Bots" />
</section>
