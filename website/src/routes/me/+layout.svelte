<script>
	// imports
	import { goto } from '$app/navigation';
	import { user } from '$lib/store';
	import { onMount } from 'svelte';

	// check user
	onMount(async () => {
		if (!$user) {
			await goto('/auth/login');
		}
	});
</script>

<section class=" bg-gradient-to-b from-red-900 to-transparent via-black">
	<slot />
</section>
