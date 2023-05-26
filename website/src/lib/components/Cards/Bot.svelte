<script lang="ts">
	// props
	export let name: string = 'Bot Name';
	export let id: string;
	export let votes: number = 0;
	export let description: string = 'No Description Available...';
</script>

<div
	class="overflow-hidden relative bg-red-600/5 flex rounded-xl border-2 border-red-700 p-4 shadow-sm sm:p-4 lg:p-8"
>
	<div class="pt-4 text-gray-500 w-full">
		<div class="flex gap-x-3">
			<div>
				<img src="/favicon.png" alt={name} class="h-16 w-16 sm:h-10 sm:w-10 rounded-full" />
			</div>
			<div>
				<a class="select-none" href={`/@${id}`}>
					<h3 class="text-2xl capitalize font-medium text-red-700">
						{name}
					</h3>
					<p class="text-sm font-bold text-gray-400 flex">
						<span class="stroke-red-700 h-4 w-4 mr-1"> 🧾 </span>
						N/A
					</p>
				</a>
			</div>
		</div>

		<p class="mx-1 mt-4 text-sm sm:block">
			{description}
		</p>

		<div class="gap-x-1 text-center mt-4 grid w-full grid-cols-5">
			<a
				href={`/@${id}/invite`}
				target="_blank"
				class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 bg-red-200/10 py-3 text-white/70 rounded-lg"
			>
				Invite
			</a>
			<a
				href={`/@${id}`}
				class="hover:scale-105 hover:z-20 hover:shadow-lg col-span-2 bg-red-200/10 py-3 text-white/70 rounded-lg"
			>
				View
			</a>
			<button
				class="hover:scale-105 hover:z-20 hover:shadow-lg bg-red-200/10 py-3 text-white/70 rounded-lg"
			>
				♻️
			</button>
		</div>
	</div>
	<div class="absolute right-0">
		<span
			class="rounded-lg flex m-1.5 w-auto border-2 text-center border-red-700 bg-red-700/10 px-2 py-1.5 text-sm font-thick text-red-700"
		>
			<span class="stroke-red-700 fill-red-700 h-4 w-4 mr-px"> 💪 </span>
			{votes}
		</span>
	</div>
</div>
