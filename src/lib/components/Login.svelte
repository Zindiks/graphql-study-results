<script>
	import { Eye, EyeSlash } from 'svelte-heros-v2';

	let hide = false;

	let login = '';
	let password = '';

	function handleSubmit(event) {
		console.log(event);
	}

	let score = 0;

	let progressBarColor = 'bg-none';

	function toggleHide() {
		const password = document.getElementById('password');
		password.type === 'password' ? (password.type = 'text') : (password.type = 'password');

		hide = !hide;
	}

	let inputStyle = 'p-2 border w-full rounded font-light mb-4 border-slate-500';
</script>

<form type="submit" method="POST" action="?/login" class="form flex flex-col m-auto relative">
	<input
		type="email"
		placeholder="Email address"
		name="email"
		autocomplete=""
		class={inputStyle}
		bind:value={login}
	/>

	<div class="relative w-full flex">
		<input
			type="password"
			name="password"
			placeholder="********"
			autocomplete="current-password"
			id="password"
			class={inputStyle}
			bind:value={password}
		/>

		<div class="w-6 h-6 absolute opacity-30 right-[10px] top-[10px]" on:click={toggleHide}>
			{#if hide}
				<Eye />
			{:else}
				<EyeSlash />
			{/if}
		</div>
	</div>

	<button
		type="submit"
		class="p-2 border mb-5 drop-shadow-md bg-gradient-to-l from-blue-500/80 to-purple-500/50 rounded-xl pointer w-full"
		>Sign in</button
	>
</form>
