<script lang="ts">
	// imports
	import axios from 'axios';
	import { onMount } from 'svelte';

	// components
	import ExploreBots from '$lib/components/Explore/Bots.svelte';

	// get bots
	let bots: any[] = [];
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
	<!-- <BotFilters /> -->
	<ExploreBots {bots} description="Most voted revolt bots..." heading="Top Revolt Bots" />
	<ExploreBots {bots} description="Newest revolt bots published..." heading="Newest Bots" />
</section>
