<script>
	// props
	export let title = 'Information';
	export let content = [{ name: 'Data', value: 'Value' }];
</script>

<div class="my-3">
	<strong class="tracking-wider mb-2 text-lg text-white/80 font-extrabold">{title}</strong>
	<ul class="my-3 pl-2">
		{#each content as item}
			<li>
				<p>
					<span class="font-bold tracking-wider">
						{item.name}:
					</span>
					<span class="font-medium scale-110"> {item.value}</span>
				</p>
			</li>{/each}
	</ul>
</div>
