<script lang="ts">
	// Props
	export let disabled: boolean = false;
	export let required: boolean = true;
	export let placeholder: string = 'Input...';
	export let value: any;
	export let label: string = '';
</script>

<div class="my-3">
	{#if label.trim().length >= 0}
		<span class="text-left text-sm"> {label}</span>
	{/if}
	<textarea
		{disabled}
		bind:value
		rows="8"
		class="py-3 px-4 block w-full bg-white/10 shadow-md outline-none rounded-md"
		{placeholder}
		{required}
	/>
</div>
