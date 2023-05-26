<script>
	// components
	import BotpageHeader from '$lib/components/Botpage/Header.svelte';
	import BotpageDescription from '$lib/components/Botpage/Description.svelte';
	import HeroSearch from '$lib/components/Hero/index.svelte';
</script>

<section class="my-5">
	<HeroSearch />
	<BotpageHeader />
	<BotpageDescription markdown="## hello _hi_" />
</section>
