<script lang="ts">
	// components
	import Endline from '$lib/components/UI/Endline.svelte';

	// links
	const links: Array<{
		name: string;
		url: string;
	}> = [
		{ name: 'Home', url: '/' },
		{ name: 'Your Profile', url: '/@me' },
		{ name: 'Github', url: '/github' },
		{ name: 'Revolt Server', url: '/support' },
		{ name: 'API', url: '/api' }
	];
</script>

<section id="footer" class="p-6 md:py-10 text-center bg-red-800/10 rounded-2xl">
	<strong class="text-4xl my-10">RevBots</strong>
	<p class="text-sm my-4 text-gray-200/50">
		Welcome to Revbots, your one-stop hub for exploring an array of cutting-edge bots tailored
		specifically for Revolt, the dynamic chat platform that revolutionizes communication. Enhance
		your Revolt experience with our diverse range of bots, from productivity tools to entertainment
		companions. Join us now and witness the next level of interaction on Revolt. Rev Revolt Bots -
		Empowering your Revolt journey with limitless possibilities!
	</p>
	<ul class="mt-8 mb-6 justify-center items-center md:mt-10 flex flex-wrap gap-x-3 gap-y-1">
		{#each links as link (link.name)}
			<li>
				<a href={link.url} class="underline text-xs tmd:text-sm">
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
	<Endline />
	<div class="my-4">
		<p>
			Created with ❤️ by <a
				class="font-extrabold"
				href="https://github.com/ArnavK-09"
				target="_blank">ArnavK-09</a
			>
		</p>
		<p>
			We are not affiliated by <a class="font-extrabold" href="https://revolt.chat" target="_blank"
				>Revolt</a
			>
		</p>
	</div>
</section>
