<script>
	// Icons
	import Icon from '@iconify/svelte';

	// Store
	import { nav, user } from '$lib/store';
</script>

<nav class="flex justify-between fixed px-4 h-16 w-full items-center top-0 z-20 bg-red-800">
	<div class="flex h-full">
		<a href="/">
			<img alt="Logo" src="/logo.svg" class="h-16 w-16 brightness-0 invert" />
		</a>
	</div>
	<div class="text-right flex gap-x-4">
		<a aria-label="open_your_profile" href="/@me" class="rounded-full p-px hover:bg-white/20">
			{#if $user}
				<div class="flex items-center">
					<img
						alt="Logo"
						src={$user?.avatar}
						class="h-8 mx-1 w-8 rounded-full shadow-lg bg-black"
					/>
					<span class="text-md font-medium tracking-wide hidden md:inline mx-1"
						>{`${$user.username}#${$user.discriminator}`}</span
					>
				</div>
			{:else}
				<Icon icon="solar:user-broken" width={30} height={30} />
			{/if}
		</a>
		<button
			aria-label="open_navigation"
			on:click={() => nav.set(!$nav)}
			type="button"
			class="fill-white w-8 h-8 stroke-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				role="img"
				width="30"
				height="30"
				viewBox="0 0 24 24"
				class="iconify iconify--ci"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 17h7M5 12h14M5 7h14"
				/></svg
			>
		</button>
	</div>
</nav>
