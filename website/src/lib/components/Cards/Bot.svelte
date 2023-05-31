<script lang="ts">
	// imports
	import Icon from '@iconify/svelte';

	// props
	export let id: string;
	export let votes = 0;
	export let description: string | null;
	export let avatar = '/logo.png';
</script>

<div
	class="overflow-hidden relative bg-red-600/5 flex rounded-xl border-2 border-red-700 p-4 shadow-sm sm:p-4 lg:p-8"
>
	<div class="pt-4 w-full">
		<div class="flex gap-x-3">
			<div>
				<a href={`/@${id}`}>
					<img src={avatar} alt={`${id} Pfp`} class="h-16 w-16 sm:h-10 sm:w-10 rounded-full" />
				</a>
			</div>
			<div>
				<a class="select-none" href={`/@${id}`}>
					<h3 class="text-2xl capitalize font-medium text-red-700">
						{id}
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

		<p class="mx-1 text-gray-400 mt-4 text-sm sm:block">
			{description ?? 'No Description Available...'}
		</p>

		<div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
			<a href={`/@${id}/invite`} target="_blank" class="col-span-2 bg-red-200/10 py-3 rounded-lg">
				Invite
			</a>
			<a href={`/@${id}`} class="col-span-2 bg-red-200/10 py-3 rounded-lg"> View </a>
			<a href={`/@${id}`} class="bg-red-100/10 py-3 justify-center rounded-lg">
				<Icon icon="tabler:share" color="#fff" style="margin: auto;" />
			</a>
		</div>
	</div>
	<div class="absolute right-1">
		<span
			class="rounded-lg flex m-1.5 w-auto border-2 text-center border-red-700 bg-red-700/10 px-2 py-1.5 text-sm font-thick text-red-700"
		>
			<span class="fill-red-700 mr-px">
				<Icon icon="bxs:upvote" width={15} height={15} />
			</span>
			{votes}
		</span>
	</div>
</div>
