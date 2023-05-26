<script>
	// props
	export let styling = '';
	export let text = 'Gradient Text';
</script>

<span
	class={`${styling} text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-800 to-red-500`}
>
	{text}
</span>
