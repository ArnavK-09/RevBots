<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	// Icons
	import Icon from '@iconify/svelte';
	// Props
	export let bot: string;
	// on share
	const share = () => {
		if (navigator.share && window) {
			navigator
				.share({
					title: `🤖 Checkout "${bot}" On RevBots — Explore And Rev Revolt Botx Easily!...`,
					url: window.location.href
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			alert('Failed to Share URL, Kindly copy and paste');
		}
	};
</script>

<div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
	<a
		href={$page.url + '/invite'}
		target="_blank"
		class="col-span-2 py-3 text-black rounded-lg font-thick border border-black bg-red-500"
	>
		Invite
	</a>
	<a
		href={$page.url + '/vote'}
		class="hover:shadow-lg col-span-2 bg-white/10 py-3 text-white/90 rounded-lg"
	>
		Vote
	</a>
	<button on:click={share} class="bg-white/10 py-3 rounded-lg">
		<Icon icon="tabler:share" color="#fff" style="margin: auto;" />
	</button>
</div>
