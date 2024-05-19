<script>
	export let data;

	const { campus, email, firstName, lastName } = data;



	

</script>

<nav class="w-full h-8 bg-slate-900 border-b border-gray-800">
	<div class="flex text-white justify-between p-2 mx-2">


		<p>{firstName} {lastName}</p>

		<div class="flex gap-2">
			<a href="/profile">profile</a>

			<form action="?/signout" method="post">
				<input type="submit" value="logout" />
			</form>
		</div>
	</div>

	<!-- <input type="text" placeholder="search"  class="rounded-lg w-full placeholder-slate-400 bg-slate-900 border border-slate-800" bind:value={searchValue} on:input={console.log(searchValue)} /> -->
</nav>
