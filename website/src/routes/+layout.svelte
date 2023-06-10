<script lang="ts">
	// global css
	import '../global.css';

	// imports
	import { siteLoading } from '$lib/store';
	import { onMount } from 'svelte';
	import { user, tags, nav } from '$lib/store';
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// components
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '@iconify/svelte';

	// variables
	let _loading: boolean;

	// state values
	siteLoading.subscribe((value) => {
		_loading = value;
	});

	// onMount
	onMount(async () => {
		/* fetch user */
		const loggedUser = await (await fetch(`/api/me`)).json();
		user.set(loggedUser.user);
		/* fetch tags */
		const DB_tags = (await (await fetch(`/api/tags`)).json()).tags;
		if (DB_tags) {
			tags.set(DB_tags);
		}
	});

	// variables
	const links: Array<{
		name: string;
		url: string;
	}> = [
		{ name: 'Home', url: '/' },
		{ name: 'Explore Bots', url: '/' },
		{ name: 'Your Profile', url: '/me' },
		{ name: 'Github', url: '/github' },
		{ name: 'Support', url: '/support' },
		{ name: 'API', url: '/api' }
	];
</script>

<!-- Loader -->
{#if _loading}
	<section
		transition:fade={{ duration: 50 }}
		class="flex justify-center items-center z-40 p-auto h-screen w-screen bg-black/50 fixed left-0 top-0"
	>
		<div>
			<Icon icon="eos-icons:three-dots-loading" width={200} height={100} />
		</div>
	</section>
{/if}
<!-- universal menu drawer -->
{#if $nav}
	<section transition:fade class="z-20 h-screen w-screen bg-black/70 fixed top-0" />
{/if}
{#if $nav}
	<aside
		transition:slide={{ delay: 175, duration: 250, easing: quintOut, axis: 'x' }}
		class="z-30 h-screen bg-black/90 w-[90%] md:w-[40%] fixed top-0 right-0 md:px-10 px-5"
	>
		<button
			on:click={() => nav.set(false)}
			type="button"
			aria-label="close_navigation"
			class="absolute top-0 right-5 mt-4"
		>
			<Icon icon="radix-icons:cross-2" width={30} height={30} />
		</button>
		<ul class="divide-y-2 divide-gray-500/40 text-center font-normal tracking-widest mt-14">
			{#each links as link (link.name)}
				<li>
					<a
						aria-label={link.name.toLowerCase()}
						on:click={() => nav.set(false)}
						href={link.url}
						class="my-8 md:my-10 inline-block">{link.name}</a
					>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
<!-- Navbar -->
<header>
	<Navbar />
</header>

<!-- Page -->
<div class="pt-16">
	<slot />
</div>

<!-- Footer -->
<footer class="mt-14 md:mt-16">
	<Footer />
</footer>
