<script>
	import {
		Briefcase,
		ChartPie,
		ChartBar,
		ChevronDoubleUp,
		Cog6Tooth,
		Home,
		Hashtag,
		TableCells
	} from 'svelte-heros-v2';

	let arr = [''];
</script>

<sidebar class=" w-16 sm:w-3/12 md:w-3/12 lg:w-2/12 bg-slate-900 border-r border-gray-800">
	<header class="w-full h-16 p-2">
		<p
			class=" hidden sm:block font-bold text-2xl lg:text-4xl h-full items-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-full"
		>
			GraphQL
		</p>
		<p
			class=" sm:hidden font-bold text-4xl lg:text-4xl h-full flex items-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent w-full"
		>
			G
		</p>
	</header>

	<section class=" sm:m-4 rounded-md">
		<div class="w-full py-3 px-4 hover:bg-slate-700 rounded-md flex group hover:">
			<Home class="sm:mr-4 stroke-slate-400 group-hover:stroke-slate-100 lg:w-8 lg:h-8" color="" />
			<p class="text-slate-400 group-hover:text-slate-100 hidden sm:block lg:text-2xl">Home</p>
		</div>

		<div class="w-full py-3 px-4 hover:bg-slate-700 rounded-md flex group hover:">
			<ChartPie
				class="sm:mr-4 stroke-slate-400 group-hover:stroke-slate-100 lg:w-8 lg:h-8"
				color=""
			/>
			<p class="text-slate-400 group-hover:text-slate-100 hidden sm:block lg:text-2xl">Chart</p>
		</div>

		<div class="w-full py-3 px-4 hover:bg-slate-700 rounded-md flex group hover:">
			<TableCells
				class="sm:mr-4 stroke-slate-400 group-hover:stroke-slate-100 lg:w-8 lg:h-8"
				color=""
			/>
			<p class="text-slate-400 group-hover:text-slate-100 hidden sm:block lg:text-2xl">Tables</p>
		</div>
	</section>
</sidebar>
