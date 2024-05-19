<script>
	export let data;

	const { firstName, lastName } = data;
</script>

<div class="p-4 bg-slate-900 rounded-md">
	<p class="text-4xl text-white">Welcome, {firstName} {lastName}</p>
</div>
