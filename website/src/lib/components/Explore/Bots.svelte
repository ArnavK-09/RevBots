<script lang="ts">
	// components
	import BotCard from '$lib/components/Cards/Bot.svelte';
	import Icon from '@iconify/svelte';

	// props
	export let heading = 'Explore Bots...';
	export let description = 'Checkout the awesome bots';
	export let bots: any[] = [];
</script>

<section class="my-10 px-5">
	<div>
		<h2 class="font-medium text-3xl">{heading}</h2>
		<p class="text-gray-400/80 text-sm">{description}</p>
	</div>
	<div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
		{#if bots.length == 0}
			<div class="flex justify-center items-center">
				<Icon icon="eos-icons:three-dots-loading" width={200} height={100} />
			</div>
		{/if}
		{#each bots as bot (bot.id)}
			<BotCard
				avatar={bot.avatar}
				votes={bot.votes}
				description={bot.shortDescription}
				id={bot.username}
				tags={bot.tags}
			/>
		{/each}
	</div>
</section>
