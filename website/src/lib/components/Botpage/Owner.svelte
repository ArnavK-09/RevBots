<script>
	// Props
	export let avatar = '/logo.svg';
	export let name = 'Owner Name';
</script>

<div class="mx-4 mt-4">
	<div class="bg-gray-200/10 md:bg-black/20 rounded-2xl my-2 py-3 md:py-6">
		<div class="flex items-center justify-between w-full px-4">
			<img class="rounded-full border border-red-600 h-10 w-10" src={avatar} alt="Owner PFP" />
			<h5>
				<span class="text-xs mr-3 opacity-80 md:text-sm"> Owned By:</span>{name}
			</h5>
		</div>
	</div>
</div>
