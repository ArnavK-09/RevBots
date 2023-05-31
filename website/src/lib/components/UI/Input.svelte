<script lang="ts">
	// Props
	export let disabled = false;
	export let required = true;
	export let placeholder = 'Input...';
	export let value: any;
	export let label = '';
	export let name: string = placeholder.replace(" ", "").toLowerCase();
</script>

<div class="my-3">
	{#if label.trim().length >= 0}
		<span class="text-left text-sm"> {label}</span>
	{/if}
	<input
		{name}
		{disabled}
		bind:value
		class="py-3 px-4 block w-full bg-white/10 shadow-md outline-none rounded-md"
		{placeholder}
		{required}
	/>
</div>
