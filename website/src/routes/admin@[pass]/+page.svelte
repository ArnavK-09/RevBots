<script lang="ts">
	// imports
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	// components
	import Tag from '$lib/components/UI/Tag.svelte';
	import Button from '$lib/components/UI/Button.svelte';
	import Input from '$lib/components/UI/Input.svelte';

	// props
	export let data: PageData;

	// variables
	const bots = data.bots;
	const action = 'admin@' + $page.params.pass;
</script>

<!-- all Bots -->
<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	{#each bots as bot (bot.username)}
		<div class="py-4 px-2 overflow-scroll border-4 rounded-lg border-red-800 text-center">
			<!-- base info -->
			<div class="my-2 flex items-center justify-center">
				<img
					class="border-2 border-red-800 rounded-full h-12 w-12"
					src={bot.avatar}
					alt={bot.username}
				/>
			</div>
			<div>
				<h3 class="underline text-md font-medium">{bot.username}</h3>
				<p class="text-xs text-gray-200/70 my-3">
					Server ID: #{bot.id}
					<br />
					Owned By: {bot.ownerId}
					<br />
					Votes: {bot.votes}
				</p>
				<p class="text-white/80 text-sm">{bot.shortDescription ?? 'No Short Description'}</p>
			</div>
			<p class="mx-3 text-sm border p-2 rounded-2xl">
				{bot.description}
			</p>
			<!-- tags -->
			<div class="flex my-4 w-full justify-left flex-wrap gap-2 scale-90">
				{#each bot.tags as tag}
					<Tag label={tag} />
				{/each}
			</div>
			<!-- socials -->
			<div>
				<ul>
					<li><strong>Website: </strong>{'  ' + bot.website}</li>
					<li><strong>Github: </strong>{'  ' + bot.github}</li>
					<li><strong>Server: </strong>{'  ' + bot.support}</li>
				</ul>
				<a target="_blank" href={bot.invite}><Button label="Invite Bot" /></a>
			</div>
			<!-- extra -->
			<ul>
				<li>
					<span class="text-red-700">Prefix:</span>
					{bot.prefix}
				</li>
				<li>
					<span class="text-red-700"> Published On:</span>
					{bot.publishedOn}
				</li>
				<li>
					<span class="text-red-700">Identifier:</span>
					{bot.identifier}
				</li>
			</ul>
			<!-- actions -->
			<h4 class="text-lg my-4 underline font-medium">Bot Actions</h4>
			<form method="post" class="text-left mx-2">
				<Input name="identifier" label="Identifier" value={bot.identifier} />
				<Input
					name="status"
					label="Bot Status (ACTIVE | SHADOW_BANNED | DEPRECATED | PENDING)"
					value={bot.status}
				/>
				<Input name="promoted" label="Promoted" value={bot.promoted} />
				<button
					class="w-full py-3 text-center border border-black text-black rounded-2xl rounded-b bg-red-500"
					formaction={`${action}?/status`}>Update Status</button
				>
				<button
					class="w-full py-3 text-center border border-black text-black rounded-2xl rounded-t bg-red-500"
					formaction={`${action}?/promote`}>Update Promotion</button
				>
			</form>
		</div>
	{/each}
</div>
