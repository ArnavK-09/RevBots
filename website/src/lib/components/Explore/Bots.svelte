<script>
	// components
	import BotCard from '$lib/components/Cards/Bot.svelte';

	// props
	export let heading = 'Explore Bots...';
	export let description = 'Checkout the awesome bots';
	export let bots = [];
</script>

<section class="my-5 px-5">
	<div>
		<h2 class="font-medium text-3xl">{heading}</h2>
		<p class="text-gray-400/80 text-sm">{description}</p>
	</div>
	<div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
		{#if bots.length == 0}
			<div class="flex my-20 items-center justify-center">
				<h4 class="text-2xl text-gray-400">Loading...</h4>
			</div>
		{/if}
		{#each bots as bot (bot.id)}
			<BotCard
				avatar={bot.avatar}
				votes={bot.votes}
				description={bot.shortDescription}
				id={bot.username}
			/>
		{/each}
	</div>
</section>
