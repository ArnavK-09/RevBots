<script lang="ts">
	// components
	import MetaHead from '$lib/components/Head.svelte';
	import HeroSearch from '$lib/components/Hero/index.svelte';
	import BotpageHeader from '$lib/components/Botpage/Header.svelte';

	// imports
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { siteLoading, user } from '$lib/store';

	// props
	export let data: PageData;

	// vars
	let userVoteData: any = {};
	let User: any = { id: '' };

	// extras
	user.subscribe((value) => {
		if (value) {
			User = value;
		}
	});
	siteLoading.set(true);
	// onMount
	onMount(async () => {
		/* fetch user */
		userVoteData = await (await fetch(`/api/bots/${$page.params.botid}/vote`)).json();
		siteLoading.set(false);
	});
</script>

<MetaHead title={`Vote For "${data.bot.username}" After every 24 hours...`} />
<section>
	<HeroSearch />
	<div class="my-14 md:mx-20">
		<BotpageHeader
			actions={false}
			avatar={data.bot.avatar}
			description={`Vote for your favourite "${data.bot.username}" bot after every 24 hours...`}
			name={data.bot.username}
			id={data.bot.id}
		/>
		{#if User.identifier}
			{JSON.stringify(User)}
			<div class="mx-9">
				<div class="my-10 px-2 rounded-2xl md:shadow-2xl shadow-lg py-14 shadow-red-600">
					<div class="text-center">
						<h3 class="text-gray-200/80 text-2xl md:text-3xl font-medium md:font-semibold">
							Time Remaining to vote: {userVoteData.can_vote?.time_left ?? 'Loading'}
						</h3>
					</div>
					<div class="w-full flex items-center justify-center mt-10">
						<form method="POST">
							<input type="text" hidden name="user" bind:value={User.id} />
							<input type="text" hidden name="bot" bind:value={$page.params.botid} />
							<button
								aria-label="vote_for_bot"
								type="submit"
								disabled={!userVoteData.can_vote?.status}
								class="border shakeme border-black disabled:opacity-70 text-black bg-gradient-to-r from-red-500 to-red-600 py-5 px-9 md:px-16 text-xl font-semibold rounded-lg"
							>
								Vote For Bot
							</button>
						</form>
					</div>
				</div>
			</div>
		{:else}
			<section class="flex h-full my-20 items-center justify-center">
				<h3 class="tracking-wider text-2xl md:text-4xl text-gray-200 font-semibold">
					You need to be logged in
				</h3>
			</section>
		{/if}
	</div>
</section>
