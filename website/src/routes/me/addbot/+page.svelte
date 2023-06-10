<script lang="ts">
	// components
	import Button from '$lib/components/UI/Button.svelte';
	import Input from '$lib/components/UI/Input.svelte';
	import Textarea from '$lib/components/UI/Textarea.svelte';
	import MetaHead from '$lib/components/Head.svelte';

	// imports
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { siteLoading } from '$lib/store';
	import { tags } from '$lib/store';

	// state
	let identifier: string,
		shortDescription: string,
		longDescription: string,
		prefix: string,
		website: string,
		github: string,
		server: string,
		invite: string,
		form: any,
		bot_tags: string[] = [];
	$: form = {
		identifier,
		shortDescription,
		prefix,
		longDescription,
		website,
		github,
		invite,
		server,
		tags: bot_tags
	};

	// addbot
	const addBot = async () => {
		// validate
		if (!(form.identifier.length == 26)) {
			alert('Identifier Must be of 26 characters');
		} else if (longDescription.trim().length < 10) {
			alert('Long description must be min 10 chracters');
		} else if (shortDescription.trim().length > 65) {
			alert('Long description must be max 65 chracters');
		} else if (github.trim().length < 3 || !github.includes('/')) {
			alert('Invalid Github Repo');
		} else {
			/* all fine */
			siteLoading.set(true);
			await axios
				.post('/api/me/bots', {
					data: form
				})
				.then(async () => {
					alert('Bot Sent for review! Please wait for few days');
					await goto('/me');
				})
				.catch((e) => alert(e.message))
				.finally(() => siteLoading.set(false));
		}
	};
</script>

<MetaHead title="Submit new bot to RevBots" />
<section class="py-10 md:px-20 px-5">
	<h2 class="font-semibold text-center text-3xl">Add Your Bot</h2>
	<form class="my-5 divide-y-8 divide-transparent" on:submit|preventDefault={addBot}>
		<Input
			label="Enter Bot Identifier"
			bind:value={identifier}
			placeholder="Example 01H03C6Q86JP0XT39RTDPSS19V"
		/>
		<Input label="Enter Bot Server Prefix" bind:value={prefix} placeholder="Example $rb" />
		<Input
			label="Enter Bot Short Description (65 Chracters)"
			bind:value={shortDescription}
			placeholder="Example Our bot is best"
		/>
		<Input
			label="Enter Invite URL"
			bind:value={invite}
			placeholder="Example https://revolt.bot/invite"
		/>
		<Input
			required={false}
			label="Enter Bot Website URL"
			bind:value={website}
			placeholder="Example https://revbots.com"
		/>
		<Textarea
			label="Enter Bot Long Description (Markdown)"
			bind:value={longDescription}
			placeholder="# Example **Markdown**"
		/>
		<Input
			required={false}
			label="Enter Bot Support Server URL"
			bind:value={server}
			placeholder="Example https://rvlt.gg/n5CdDewh"
		/>
		<Input
			label="Enter Bot Source Repo (GitHub)"
			bind:value={github}
			placeholder="Example ArnavK-09/RevBots"
		/>
		<div class="my-3">
			<span class="text-left text-sm">Select Bot Tags</span>
			{#each $tags as tag (tag)}
				<div class="flex my-3 items-center mb-4">
					<input
						id={tag.toLowerCase()}
						type="checkbox"
						bind:group={bot_tags}
						name={tag.toLowerCase()}
						value={tag}
						class="w-5 md:h-6 md:w-6 h-5 text-red-600 checked:bg-red-600 rounded-full focus:ring-red-700 focus:ring"
					/>
					<label
						for={tag.toLowerCase()}
						class="ml-2 capitalize md:text-md text-sm font-medium tracking-wider inline"
						>{tag.toLowerCase()}</label
					>
				</div>
			{/each}
		</div>
		<Button label="Add Bot" type="submit" />
	</form>
</section>
