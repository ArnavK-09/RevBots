<script>
	// components
	import GradientText from '$lib/components/Gradient/Text.svelte';
	import Button from '$lib/components/UI/Button.svelte';

	// logout
	const logout = () => {
		alert('todo');
		alert(JSON.stringify(document.cookie));
	};
</script>

<section class="h-screen flex items-center justify-center">
	<div class="text-center mx-2">
		<h2 class="text-5xl my-2 font-bold tracking-wider">
			<GradientText text={`Logout`} />
		</h2>
		<p class="text-3xl my-2 text-gray-400">Do You Really Wanna Logout?</p>
		<Button func={logout} label="Yes, Logout" />
	</div>
</section>
