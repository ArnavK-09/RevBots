<script lang="ts">
	// imports
	import { tags } from '$lib/store';

	// components
	import Tag from '$lib/components/UI/Tag.svelte';
	import Endline from '$lib/components/UI/Endline.svelte';
	import GradientText from '$lib/components/Gradient/Text.svelte';
	import Input from '$lib/components/UI/Input.svelte';

	// props
	export let query = '';
</script>

<section class="px-5 py-14">
	<div class="mb-9 flex flex-col mx-auto max-w-3xl justify-between">
		<h1 class="text-left font-semibold md:text-7xl text-5xl">
			Rev the <GradientText text="Revolt" /> bots...
		</h1>
		<form action="/search" method="get">
			<Input name="query" value={query} placeholder="Explore Revolt Bots..." />
		</form>
		<div class="mt-5 gap-x-4 overflow-x-scroll flex flex-scroll">
			{#each $tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</div>
	<Endline />
</section>
