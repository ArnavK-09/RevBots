<script>
	// components
	import BotPageActions from '$lib/components/Botpage/Actions.svelte';

	// props
	export let name = 'Revolt Name';
	export let description = 'No Bot Description Provided...';
	export let id = 0;
	export let avatar = '/favicon.png';
	export let actions = true;
</script>

<div class="bg-black/40 md:bg-black/20 mx-8 rounded-lg my-2 py-3 md:py-10">
	<div class="gap-y-5 grid grid-cols-1 md:grid-cols-2">
		<div class="flex justify-center items-center">
			<img
				class="w-32 h-32 md:scale-125 rounded-full shadow-lg border border-red-600"
				src={avatar}
				alt="Bot profile pic"
			/>
		</div>
		<div class="cols-span-3 text-center md:text-left align-middle">
			<h1 class="text-5xl font-bold break-all tracking-wide">{name}</h1>
			<span class="text-xs opacity-50"> Server ID: #{id}</span>
			{#if description} <p class="text-gray-400 text-lg my-2">{description}</p>{/if}
			{#if actions}<BotPageActions bot={name} />{/if}
		</div>
	</div>
</div>
