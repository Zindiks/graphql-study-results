<script>
	export let data;

	const { user } = data.data;

	const { attrs, login, campus } = user[0];

	let attrsArray = Object.entries(attrs);
</script>

<div class="text-white">
	<p>{login}</p>
	<p>{campus}</p>
</div>

<div class="text-white">
	<table>
		<tr>
			<td>Column 1 Data</td>
			<td>Column 2 Data</td>
		</tr>

		{#each attrsArray as [k, v]}
			<tr class="border border-slate-800">
				<td class="text-slate-500 self-end text-end">{k}</td>
				<td>{v}</td>
			</tr>
		{/each}

		<!-- Add more rows as needed -->
	</table>
</div>
