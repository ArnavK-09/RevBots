<script lang="ts">
	// global css
	import '../global.css';

	// imports
	import { siteLoading } from '$lib/store';
	import { onMount } from 'svelte';
	import { user } from '$lib/store';

	// components
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// variables
	let _loading: boolean;

	// state values
	siteLoading.subscribe((value) => {
		_loading = value;
	});

	// onMount
	onMount(async () => {
		const res = await fetch(`/api/me`);
		const loggedUser = await res.json();
		if (loggedUser.user) {
			user.set(loggedUser.user);
		}
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
<footer><Footer /></footer>
