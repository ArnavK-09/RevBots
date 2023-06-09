<script>
	// components
	import GradientText from '$lib/components/Gradient/Text.svelte';
	import Button from '$lib/components/UI/Button.svelte';

	// imports
	import { goto } from '$app/navigation';

	// logout
	const logout = async () => {
		const res = await fetch(`/api/auth`, {
			method: 'DELETE'
		});
		if (!(res.status == 500)) {
			alert('Successfully! Logout!');
		} else {
			alert('Error Encountered, Check Out Console');
			await goto('/', {
				invalidateAll: true
			});
		}
	};
</script>

<section class="h-screen flex items-center justify-center">
	<div class="text-center mx-2">
		<h2 class="text-5xl my-2 font-bold tracking-wider">
			<GradientText text={`Logout`} />
		</h2>
		<p class="text-3xl my-2 text-gray-400">Do You Really Wanna Logout?</p>
		<Button type="submit" func={logout} label="Yes, Logout" />
	</div>
</section>
