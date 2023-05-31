<script lang="ts">
	// imports
	import { user } from '$lib/store';
	import { onMount } from 'svelte';

	// components
	import Button from '$lib/components/UI/Button.svelte';
	import BotCard from '$lib/components/Cards/Bot.svelte';
	import MetaHead from '$lib/components/Head.svelte';

	// user bots
	let bots: any[] = [];

	// onMount
	onMount(async () => {
		try {
			const res = await fetch(`/api/me/bots`);
			const data = await res.json();

			if (data) {
				bots = data;
			}
		} catch {
			return;
		}
	});
</script>

<MetaHead title={$user ? $user.username : 'Not logged in'} />
<section class="py-10 h-screen px-2 md:px-16">
	<div class="flex my-3 justify-center items-center">
		<img
			class="rounded-full bg-black h-28 w-28 md:h-48 md:w-48 shadow-black shadow-2xl"
			src={$user ? $user.avatar : '/logo.png'}
			alt="Profile Pic"
		/>
	</div>
	<div class="text-center">
		<h2 class="font-semibold text-2xl">
			{$user ? $user.username : 'Not logged in'}
		</h2>
		{#if $user}
			<a href="/auth/logout" class="text-xs my-2 text-red-400 hover:underline">Logout?</a>
		{/if}
	</div>
	<div class="mx-2 my-4 md:mx-4 md:my-8">
		<span class="text-white/70 tracking-widest font-bold text-1xl md:text-2xl text-left mx-1">
			About You:-
		</span>
		<p class="p-2 rounded-lg bg-black/70 text-1xl md:text-3xl">No Bio Set...</p>
	</div>
	<a class="my-5" href="/@me/addbot">
		<Button label="Add Your Bot" />
	</a>
	{#if bots.length > 0}
		<div class="my-11">
			<h2 class="text-3xl my-5 font-semibold text-center">Your Bots</h2>
			<div class="mx-4 grid grid-cols-1 md:grid-cols-2">
				{#each Object.values(bots) as bot (bot.id)}
					<BotCard
						avatar={bot.avatar}
						votes={bot.votes}
						description={bot.shortDescription}
						id={bot.username}
					/>
				{/each}
			</div>
		</div>
	{/if}
</section>
