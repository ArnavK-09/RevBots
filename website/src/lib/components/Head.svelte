<script>
	// props
	export let title = `Discover the Ultimate Revolt Bots You'll Ever Need`;
	export let description =
		'Discover cutting-edge bots designed for Revolt, the revolutionary chat platform. Boost your Revolt experience with our range of productivity and entertainment bots. Join us now for limitless possibilities!';
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
