<script>
	// components
	import Button from '$lib/components/UI/Button.svelte';
	import Input from '$lib/components/UI/Input.svelte';
	import Textarea from '$lib/components/UI/Textarea.svelte';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { siteLoading } from '$lib/store';

	// state
	let id, shortDescription, longDescription, prefix, website, github, server, invite;
	$: form = { id, shortDescription, prefix, longDescription, website, github, invite, server };

	// addbot
	const addBot = async () => {
		// validate
		if (!(form.id.length == 26)) {
			alert('Identifier Must be of 26 characters');
		} else if (longDescription.trim().length < 10) {
			alert('Long description must be min 10 chracters');
		} else if (github.trim().length < 3 || !github.includes('/')) {
			alert('Invalid Github Repo');
		} else {
			/* all fine */
			siteLoading.set(true);
			console.log('here');
			await axios
				.post('/api/bots', {
					data: form
				})
				.then(async () => {
					alert('Bot Added');
					await goto('/@me');
				})
				.catch((e) => alert(e.message))
				.finally(() => siteLoading.set(false));
		}
	};
</script>

<section class="py-10 px-5">
	<h2 class="font-semibold text-center text-3xl">Add Your Bot</h2>
	<form class="my-5 divide-y-8 divide-transparent" on:submit|preventDefault={addBot}>
		<Input
			label="Enter Bot Identifier"
			bind:value={id}
			placeholder="Example 01H03C6Q86JP0XT39RTDPSS19V"
		/>
		<Input label="Enter Bot Server Prefix" bind:value={prefix} placeholder="Example $rb" />
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
			placeholder="Example # Explore bot features"
		/>
		<Input
			required={false}
			label="Enter Bot Website URL"
			bind:value={website}
			placeholder="Example https://revbots.com"
		/>
		<Input
			required={false}
			label="Enter Bot Support Server (Code Only)"
			bind:value={server}
			placeholder="Example ueh73h"
		/>
		<Input
			label="Enter Bot Source Repo (GitHub)"
			bind:value={github}
			placeholder="Example ArnavK-09/RevBots"
		/>
		<Button label="Add Bot" type="submit" />
	</form>
</section>
