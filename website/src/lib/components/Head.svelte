<script>
	// props
	export let title = `Explore Revolt Bots You'll Ever Need`;
	export let description =
		'Welcome to Revbots, your one-stop hub for exploring an array of cutting-edge bots tailored specifically for Revolt, the dynamic chat platform that revolutionizes communication. Enhance your Revolt experience with our diverse range of bots, from productivity tools to entertainment companions. Join us now and witness the next level of interaction on Revolt. Rev Revolt Bots - Empowering your Revolt journey with limitless possibilities!';
</script>

<svelte:head>
	<!--   {/* Basic Tags */} -->
	<title>{title} | RevBots</title>
	<meta name="description" content={description} />

	<!--  {/* Og  & Twitter Tags */} -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/banner.png" />
	<meta property="og:url" content="https://revbots.ga" />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/banner.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
