<script lang="ts">
	// imports
	import Icon from '@iconify/svelte';
	// props
	export let id: string;
	export let description: string | null;
	export let avatar = '/logo.png';
</script>

<div
	class="overflow-hidden shakeme relative bg-red-700/5 flex rounded-2xl border-2 border-red-600 p-4 shadow-md lg:p-7"
>
	<div class="pt-10 w-full">
		<div class="mb-4">
			<div class="flex my-4 justify-center items-center scale-150">
				<a href={`/@${id}`}>
					<img
						src={avatar}
						alt={`${id} Pfp`}
						class="md:h-16 md:w-16 h-12 w-12 border-2 border-red-600 rounded-full"
					/>
				</a>
			</div>
			<div class="text-center mt-5">
				<a class="select-none" href={`/@${id}`}>
					<h3 class="break-all md:text-4xl text-2xl capitalize font-semibold text-red-700">
						{id}
					</h3>
				</a>
			</div>
		</div>
		<p class="mx-1 text-gray-300 mt-3 text-md">
			{description ?? 'No Description Available...'}
		</p>
		<a
			href={`/@${id}`}
			class="bg-gradient-to-br mt-5 from-red-800 to-red-600 py-3 font-semibold tracking-widest text-lg items-center flex justify-center rounded-lg"
		>
			<Icon width={25} height={25} icon="line-md:star-pulsating-filled-loop" color="#fff" />
			<span class="mx-2">View Now</span>
		</a>
	</div>
	<div class="absolute right-1">
		<span
			class="rounded-lg flex mx-1 w-auto border-2 text-center border-red-600 bg-red-700/10 px-2 py-1 text-sm font-thick text-red-600"
		>
			<span class="fill-red-700 mr-px">
				<Icon icon="line-md:sunny-outline-twotone-loop" width={18} height={18} />
			</span>
			Promoted Bot
		</span>
	</div>
</div>
