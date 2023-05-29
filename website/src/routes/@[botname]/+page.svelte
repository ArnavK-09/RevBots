<script lang="ts">
	// components
	import BotpageHeader from '$lib/components/Botpage/Header.svelte';
	import BotpageDescription from '$lib/components/Botpage/Description.svelte';
	import BotpageInfo from '$lib/components/Botpage/Info.svelte';
	import HeroSearch from '$lib/components/Hero/index.svelte';

	// imports
	import type { PageData } from './$types';

	// props
	export let data: PageData;
</script>

<section class="my-5">
	<HeroSearch />
	<BotpageHeader
		avatar={data.avatar}
		description={data.shortDescription}
		name={data.username}
		id={data.id}
	/>
	<BotpageDescription markdown={data.description} />
	<BotpageInfo {data} />
</section>
