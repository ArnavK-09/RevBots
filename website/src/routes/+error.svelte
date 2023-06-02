<script>
	// imports
	import { page } from '$app/stores';

	// components
	import MetaHead from '$lib/components/Head.svelte';
	import GradientText from '$lib/components/Gradient/Text.svelte';
</script>

<MetaHead title={`${$page.status} - ${$page.error?.message}`} />
<section
	class="h-screen bg-gradient-to-b from-red-900 to-transparent via-black flex items-center justify-center"
>
	<div class="text-center mx-2">
		<h2 class="text-7xl font-bold tracking-wider">
			<GradientText text={`${$page.status}`} />
		</h2>
		<p class="text-4xl text-gray-400">
			{$page.error?.message}
		</p>
	</div>
</section>
