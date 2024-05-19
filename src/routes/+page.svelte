<script>
	export let data;

	import '../app.css';
	import AuditRatio from '../lib/components/AuditRatio.svelte';
	import Header from '../lib/components/Header.svelte';
	import Info from '../lib/components/Info.svelte';
	import Welcome from '../lib/components/Welcome.svelte';

	import Circle from '../lib/components/Circle.svelte';

	// Destructure the data object
	const { user, auditRatio, auditRatioUp, auditRatioDown, userXpByEvent, userXpTotal, skills } =
		data;

	let filteredSkills = {};

	for (let skill of skills) {
		if (
			filteredSkills[skill.type.split('_')[1]] === undefined ||
			filteredSkills[skill.type.split('_')[1]] < skill.amount
		) {
			filteredSkills[skill.type.split('_')[1]] = skill.amount;
		} 
	}

	const skillEntries = Object.entries(filteredSkills)
</script>

<body class="h-full">
	<div>
		<Header data={user} class="mb-10" />

		<!-- Welcome and Info components -->
		<div class="grid grid-cols-2 grid-rows-1 gap-4 mt-4 h-full">
			<Welcome data={user} />
			<Info data={user} />
		</div>
	</div>
	<!-- Header component -->

	<!-- SVG container with overflow-y-scroll -->

	<div class="grid grid-cols-2 grid-rows-1 gap-4 m-4">
		<div class="w-full">
			<AuditRatio {auditRatio} {auditRatioUp} {auditRatioDown} />

			<div class="grid grid-cols-5 grid-rows-1 gap-1 mt-1">
				{#each skillEntries as [k,v]}
					<Circle percentage={v} text={k} />
				{/each}


				
			</div>
		</div>

		<div class="">
			<div class="">
				<p class="text-white font-bold sticky text-left bg-slate-900 w-full p-2 top-[0px]">
					Projects
				</p>
				<div class="bg-slate-900 pb-8 p-4 h-full">
					{#each userXpByEvent as item, i}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="overflow-visible visible"
							width="100%"
							height="40px"
						>
							<g>
								<rect
									x={0}
									y={i + 10}
									width={item.amount / 150}
									height="35"
									rx="4"
									fill={'#3b82f6'}
									class="bar"
								/>
							</g>

							<text class="bar-text flex flex-col" x={5} y={i + 10 + 25} fill="white">
								{`${(item.amount / 1024).toFixed(2)} KB`}
							</text>

							<text class="bar-text flex flex-col" x={5} y={i + 10 + 10} fill="white">
								{item.path}
							</text>
						</svg>
					{/each}
				</div>
			</div>
		</div>
	</div>
</body>

<style>
	.bar-text {
		font-size: 9px;
		fill: white;
		text-anchor: start; /* Adjust text alignment */
	}

	.bar {
		fill: '#3b82f6';
		animation: anim 1s ease-out forwards;
	}

	@keyframes anim {
		0% {
			width: 0;
		}

		100% {
			width: 100;
		}
	}
</style>
