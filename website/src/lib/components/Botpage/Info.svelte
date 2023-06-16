<script lang="ts">
	// components
	import BotInfoCard from '$lib/components/Cards/BotInfo.svelte';

	// props
	export let data: any;

	// type
	type Tdata = {
		title: string;
		content: Array<{
			name: string;
			value: any;
			external?: boolean;
			href?: string;
		}>;
	};

	// content
	const dataFmt: Array<Tdata> = [
		{
			title: 'Overview',
			content: [
				{
					name: 'Identifier',
					value: data.identifier
				},
				{
					name: 'Discriminator',
					value: `#${data.discriminator}`
				},
				{
					name: 'Prefix',
					value: data.prefix
				},
				{
					name: 'Published On',
					value: new Date(data.publishedOn).toLocaleString()
				},
				{
					name: 'Status',
					value: data.status
				},
				{
					name: 'Promoted',
					value: data.promoted
				}
			]
		},
		{
			title: 'Socials',
			content: [
				{
					name: 'Website',
					value: data.website,
					href: `${data.website}`,
					external: true
				},
				{
					name: 'Github',
					value: data.github,
					href: `//github.com/${data.github}`,
					external: true
				},
				{
					name: 'Support',
					value: data.support,
					href: `${data.support}`,
					external: true
				}
			]
		}
	];
</script>

<div class="mx-2 mt-4">
	{#each dataFmt as item}
		<BotInfoCard {...item} />
	{/each}
</div>
