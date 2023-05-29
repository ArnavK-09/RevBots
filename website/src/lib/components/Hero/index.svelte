<script>
	// imports

	// components
	import Tag from '$lib/components/UI/Tag.svelte';
	import Endline from '$lib/components/UI/Endline.svelte';
	import GradientText from '$lib/components/Gradient/Text.svelte';
	import SearchBar from '$lib/components/Hero/Searchbar.svelte';

	// tags list
	const Tags = ['Test'];
</script>

<section class="px-5 py-14">
	<div class="mb-9 flex flex-col mx-auto max-w-3xl justify-between">
		<h1 class="text-left font-semibold md:text-7xl text-5xl">
			Rev the <GradientText text="Revolt" /> bots...
		</h1>
		<SearchBar />
		<div class="mt-5 gap-x-4 overflow-x-scroll flex flex-scroll">
			{#each Tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
	<Endline />
</section>
