<script lang="ts">
	// components
	import BotpageHeader from '$lib/components/Botpage/Header.svelte';
	import BotpageDescription from '$lib/components/Botpage/Description.svelte';
	import BotpageInfo from '$lib/components/Botpage/Info.svelte';
	import HeroSearch from '$lib/components/Hero/index.svelte';
	import BotpageOwner from '$lib/components/Botpage/Owner.svelte';
	import MetaHead from '$lib/components/Head.svelte';

	// imports
	import type { PageData } from './$types';

	// props
	export let data: PageData;
</script>

<MetaHead title={`Learn more about "${data.bot.username}" Revolt Bot...`} />
<section>
	<HeroSearch />
	<div class="my-14 md:mx-20">
		<BotpageHeader
			avatar={data.bot.avatar}
			description={data.bot.shortDescription}
			name={data.bot.username}
			id={data.bot.id}
		/>
		<BotpageDescription markdown={data.bot.description} />
		<BotpageInfo data={data.bot} />
		<BotpageOwner name={data.owner.username} />
	</div>
</section>
