<script lang="ts">
	// global css
	import '../global.css';

	// imports
	import { siteLoading } from '$lib/store';

	// components
	import Navbar from '$lib/components/Navbar.svelte';

	// variables
	let _loading: boolean;

	// state values
	siteLoading.subscribe((value) => {
		_loading = value;
	});
</script>

<!-- Loader -->
{#if _loading}
	<section
		class="flex justify-center items-center z-30 p-auto h-screen w-screen bg-black fixed left-0 top-0 opacity-50"
	>
		<div class="stroke-white opacity-100 animate-spin h-10 w-10">♻️</div>
	</section>
{/if}

<!-- Navbar -->
<header>
	<Navbar />
</header>

<!-- Page -->
<div class="pt-20">
	<slot />
</div>

<!-- Footer -->
<footer>Footer</footer>
