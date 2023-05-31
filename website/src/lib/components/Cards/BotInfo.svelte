<script lang="ts">
	// props
	export let title: string = 'Information';
	export let content: Array<{
		name: string;
		value: string;
		external?: boolean;
		href?: string;
	}> = [{ name: 'Data', value: 'Value', external: false, href: '#' }];
</script>

<div class="my-3">
	<strong class="tracking-wider mb-2 text-lg text-white/80 font-extrabold">{title}</strong>
	<ul class="my-3 pl-2">
		{#each content as item}
			{#if item.value}
				<li>
					<p>
						<span class="font-bold tracking-wider">
							{item.name}:
						</span>
						<svelte:element
							this={item.href ? 'a' : 'span'}
							href={item.href ?? undefined}
							target={item.external ? '_blank' : '_self'}
							class="font-medium scale-110 hover:underline">{item.value}</svelte:element
						>
					</p>
				</li>
			{/if}{/each}
	</ul>
</div>
