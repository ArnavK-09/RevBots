<script>
	// props
	export let markdown = 'No Data Found..';
</script>

<div class="mx-2 mt-4">
	<h2 class="tracking-wider mb-2 text-lg md:text-2xl text-white/80 font-extrabold">Description:</h2>
	<div class="bg-gray-200/10 shadow-lg rounded-lg w-full my-3 mx-1 md:mx-5 md:p-4 p-2">
		<div class="prose prose-h1:underline prose-h1:underline-offset-2 prose-invert p-2 text-white/90 hyphens-auto overflow-x-scroll no-scrollbar">
			{@html markdown} 
		</div>
	</div>
</div>
