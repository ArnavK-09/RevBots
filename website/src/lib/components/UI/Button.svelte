<script lang="ts">
	// props
	export let label = 'Button';
	export let type: 'button' | 'submit' = 'button';
	export let disabled = false;
	export let func: () => any = () => {};
</script>

<button
	{disabled}
	aria-label={label.replace(' ', '').toLowerCase()}
	class="w-full transition ease-in-out disabled:brightness-70 p-2.5 my-4 text-black text-md rounded-lg font-thick border border-black hover:scale-105 bg-red-500"
	on:click={func}
	{type}
>
	{label}
</button>
