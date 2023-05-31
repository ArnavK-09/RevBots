<script lang="ts">
	// Props
	export let disabled = false;
	export let required = true;
	export let placeholder = 'Input...';
	export let value: any;
	export let label = '';
</script>

<div class="my-3">
	{#if label.trim().length >= 0}
		<span class="text-left text-sm"> {label}</span>
	{/if}
	<textarea
		{disabled}
		bind:value
		rows="8"
		{placeholder}
		class="py-3 border-0 focus:ring-0 px-4 block w-full bg-white/10 shadow-md rounded-md"
		{required}
	/>
</div>
