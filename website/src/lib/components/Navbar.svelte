<script>
	// Icons
	import Icon from '@iconify/svelte';

	// Store
	import { nav, user } from '$lib/store';
</script>

<nav
	class="flex justify-between fixed px-4 h-16 w-full items-center top-0 z-20"
>
	<div class="flex h-full">
		<a href="/">
			<img alt="Logo" src="/logo.svg" class="h-16 w-16 brightness-0 invert" />
		</a>
	</div>
	<div class="text-right flex gap-x-4 overflow-x-scroll">
		<a aria-label="open_your_profile" href="/@me" class="rounded-full p-px hover:bg-white/20">
			{#if $user}
				<img alt="Logo" src={$user?.avatar} class="h-8 w-8 rounded-full shadow-lg bg-black" />
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
			<Icon icon="ci:menu-alt-01" width={30} height={30} />
		</button>
	</div>
</nav>
