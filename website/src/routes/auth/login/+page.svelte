<script>
	// import
	import { siteLoading } from '$lib/store';
	import axios from 'axios';
	import { goto } from '$app/navigation';

	// components
	import Button from '$lib/components/UI/Button.svelte';

	// component state
	let loginState = {
		identifier: '',
		code: null,
		userCode: '',
		done: false
	};

	/* Login functions */

	// create server request
	const handleLogin = async () => {
		// loading
		siteLoading.set(true);
		// check length
		if (!(loginState.identifier.length == 26)) {
			siteLoading.set(false);
			alert('Revolt identifier must be of 26 chracters...');
			return;
		}

		// valid
		await axios
			.post('/api/auth', {
				identifier: loginState.identifier
			})
			.then((e) => {
				/* to confirm code */
				siteLoading.set(false);
				loginState.code = e.data.code;
			})
			.catch(async (e) => {
				/* home because err */
				siteLoading.set(false);
				alert(e.message);
			});
	};

	// verify code
	const verifyCode = async () => {
		// loading
		siteLoading.set(true);

		/* Verify if user verified request by bot */
		await axios
			.get(`/api/auth?code=${loginState.code}`)
			.then((e) => {
				console.log(e);
				loginState.done = true;
				siteLoading.set(false);
			})
			.catch(async (e) => {
				/* lol err */
				siteLoading.set(false);
				alert(e.message);
			});
	};
</script>

<section class="items-center h-screen my-10">
	<!-- Login form -->
	<div class="mx-auto px-8 text-center">
		<h1 class="font-extrabold mb-14 text-3xl tracking-widest">Please login your account</h1>
		<h3 class="mb-2 tracking-wider text-1xl">
			<span class="font-thick text-gray-400 mx-px text-sm">Step1</span>
			Enter your Revolt Identifier...
		</h3>
		<input
			disabled={!(loginState.code == null)}
			bind:value={loginState.identifier}
			class="py-3 my-3 px-4 block w-full bg-white/10 shadow-md outline-none rounded-md"
			placeholder="Enter your revolt identifier here..."
			required
		/>
		<Button func={handleLogin} disabled={!(loginState.code == null)} type="button" label="Submit" />
	</div>
	<!-- verify section -->
	{#if loginState.code !== null}
		<div class="w-full mt-11 px-8 text-center">
			<h3 class="mb-2 tracking-wider text-1xl">
				<span class="font-thick text-gray-400 mx-px text-sm">Step2</span>
				Enter Verification Code in our server...
			</h3>
			<p
				class="bg-transparent text-center text-lg brightness-150 select-all border-red-700 border rounded-lg py-2"
			>
				{loginState.code}
			</p>
			<Button type="button" disabled={loginState.done} label="Verify" func={verifyCode} />
		</div>
	{/if}
	<!-- done section -->
	{#if loginState.done}
		<div class="w-full mt-11 px-8 text-center">
			<h3 class="mb-2 tracking-wider text-1xl">
				<span class="font-thick text-gray-400 mx-px text-sm">Step3</span>
				You are done now...
			</h3>
			<Button type="button" label="Enjoy 🎉" func={async () => await goto('/')} />
		</div>
	{/if}
</section>
