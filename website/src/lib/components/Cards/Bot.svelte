<script lang="ts">
	// imports
	import Icon from '@iconify/svelte';
	import Tag from '$lib/components/UI/Tag.svelte';

	// props
	export let id: string;
	export let username: string;
	export let votes = 0;
	export let description: string | null;
	export let avatar = '/logo.png';
	export let tags: string[] = [];
</script>

<div
	class="overflow-hidden relative bg-red-600/5 flex rounded-xl border-2 border-red-700 p-4 shadow-sm sm:p-4 lg:p-8"
>
	<div class="pt-4 w-full">
		<div class="flex gap-x-3">
			<div>
				<a href={`/bot/${id}`}>
					<img src={avatar} alt={`${id} Pfp`} class="md:h-16 md:w-16 h-12 w-12 rounded-full" />
				</a>
			</div>
			<div>
				<a class="select-none" href={`/bot/${id}`}>
					<h3 class="text-2xl capitalize font-medium text-red-700">
						{username}
					</h3>
					<p class="text-sm font-bold text-gray-400 flex">
						<span class="text-red-700 mr-1">
							<Icon icon="majesticons:analytics-line" width={20} height={20} />
						</span>
						N/A
					</p>
				</a>
			</div>
		</div>
		<p class="mx-1 my-1 text-gray-400 mt-3 text-sm sm:block">
			{description ?? 'No Description Available...'}
		</p>
		<div class="flex w-full my-2 justify-left flex-wrap gap-2">
			{#each tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
		<div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
			<a
				href={`/bot/${id}/invite`}
				target="_blank"
				class="col-span-2 bg-red-200/10 py-3 rounded-lg"
			>
				Invite
			</a>
			<a href={`/bot/${id}`} class="col-span-2 bg-red-200/10 py-3 rounded-lg"> View </a>
			<a href={`/bot/${id}`} class="bg-red-100/10 py-3 items-center flex justify-center rounded-lg">
				<Icon icon="tabler:share" color="#fff" /> <span class="sr-only">Share</span>
			</a>
		</div>
	</div>
	<div class="absolute right-1">
		<span
			class="rounded-lg align-middle font-extrabold flex items-center justify-center m-1.5 w-auto border-2 text-center border-red-700 bg-red-700/10 px-2 py-1.5 text-sm text-red-700"
		>
			<span class="fill-red-700 mr-px">
				<Icon icon="bxs:upvote" width={15} height={15} />
			</span>
			{votes}
		</span>
	</div>
</div>
