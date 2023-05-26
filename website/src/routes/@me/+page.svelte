<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="py-10 h-screen px-2">
	<div class="flex justify-center items-center">
		<img
			class="rounded-full h-28 w-28 md:h-48 md:w-48 shadow-black shadow-2xl"
			src="/favicon.png"
			alt="Profile Pic"
		/>
		<h2>{data.user.username}</h2>
	</div>
	<div class="mx-2 my-4 md:mx-4 md:my-8">
		<h3 class="text-white/70 tracking-widest font-bold text-1xl md:text-2xl text-left mx-1">
			About You:-
		</h3>
		<p class="p-2 rounded-lg bg-black/70 text-1xl md:text-3xl">No Bio Set...</p>
	</div>
</section>
