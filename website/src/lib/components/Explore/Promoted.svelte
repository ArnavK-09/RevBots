<script lang="ts">
	// imports
	import axios from 'axios';
	import { onMount } from 'svelte';

	// components
	import PromotedBotCard from '$lib/components/Cards/PromotedBot.svelte';

	// get bots
	let bots: any[] = [];

	onMount(async () => {
		/* get promoted bots */
		await axios
			.get('/api/bots?sort=promoted')
			.then((e) => {
				bots = e.data;
			})
			.catch((err) => alert(err.message));
	});
</script>

{#if !(bots.length == 0)}
	<section class="my-10 px-5 md:px-16">
		<div>
			<h2 class="font-medium text-3xl">Promoted Bots</h2>
			<p class="text-gray-400/80 text-sm">
				Promote your bot on our site. Contact in our server for more info...
			</p>
		</div>
		<div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each bots as bot (bot.id)}
				<PromotedBotCard avatar={bot.avatar} description={bot.shortDescription} id={bot.username} />
			{/each}
		</div>
	</section>
{/if}
