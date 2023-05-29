<script lang="ts">
	// components
	import BotInfoCard from '$lib/components/Cards/BotInfo.svelte';

	// props
	export let data: any;

	// content
	const dataFmt = [
		{
			title: 'Overview',
			content: [
				{
					name: 'Prefix',
					value: data.prefix
				}
			]
		}
	];
</script>

<div class="mx-2 mt-4">
	{#each dataFmt as item}
		<BotInfoCard {...item} />
	{/each}
</div>
