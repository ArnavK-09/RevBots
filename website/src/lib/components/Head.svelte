<script>
    // props 
    export let title = `Discover the Ultimate Revolt Bots You'll Ever Need`;
    export let description =
        'Discover cutting-edge bots designed for Revolt the revolutionary chat platform Boost your Revolt experience with our range of community bots';
</script>

<svelte:head>
    <!--   {/* Basic Tags */} -->
    <title>{title} | RevBots</title>
    <meta name="description" content={description} />
    <link rel="canonical" href="https://www.example.com/your-page-url">
    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Revbots",
            "url": "https://revbots.vercel.app/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://revbots.vercel.app/search?query={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    </script>


    <!--  {/* Og  & Twitter Tags */} -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/banner.png" />
    <meta property="og:url" content="https://revbots.vercel.app" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/banner.png" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>