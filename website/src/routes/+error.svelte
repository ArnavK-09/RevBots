<script>
	// import
	import { page } from '$app/stores';
	import GradientText from '$lib/components/Gradient/Text.svelte';
</script>

<section class="h-screen flex items-center justify-center">
	<div class="text-center mx-2">
		<h2 class="text-7xl font-bold tracking-wider">
			<GradientText text={`${$page.status}`} />
		</h2>
		<p class="text-4xl text-gray-400">
			{$page.error?.message}
		</p>
	</div>
</section>
