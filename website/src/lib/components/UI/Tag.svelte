<script>
	// props
	export let label = 'Tag';
</script>

<a href={`/search?query=tag:${label}`}>
	<div
		class="px-2 no-select capitalize align-middle hover:brightness-125 flex bg-red-700/20 text-xs py-1 md:text-sm rounded-lg"
	>
		<span class="font-extrabold text-red-700 mr-1.5">#</span>{' '}
		{label}
	</div>
</a>
