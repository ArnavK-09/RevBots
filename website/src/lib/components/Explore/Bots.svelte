<script>
	// components
	import BotCard from '$lib/components/Cards/Bot.svelte';

	// props
	export let heading = 'Explore Bots...';
	export let description = 'Checkout the awesome bots';
</script>

<section class="my-5 px-5">
	<div>
		<h2 class="font-medium text-3xl">{heading}</h2>
		<p class="text-gray-400/80 text-sm">{description}</p>
	</div>
	<div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
		<BotCard id="tezt" />
	</div>
</section>
