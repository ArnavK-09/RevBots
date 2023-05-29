<script>
	// props
	export let markdown = 'No Data Found..';
</script>

<div class="mx-2 mt-4">
	<h2 class="tracking-wider mb-2 text-lg text-white/80 font-extrabold">Description:</h2>
	<div class="bg-gray-200/20 shadow-lg rounded-lg w-full my-3 mx-1 md:mx-5 md:p-4 p-2">
		<div class="text-white/90 hyphens-auto">{@html markdown}</div>
	</div>
</div>
