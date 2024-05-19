<script lang="ts">
	export let percentage;
	export let text;


	console.log(text)



	


</script>

<div class="w-full relative bg-slate-900 rounded-md">
	<svg viewBox="0 0 36 36" class="circular-chart">
		<path
			class="circle"
			stroke-dasharray="{percentage}, 100"
			d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
		/>

		<text x="50%" y="50%" text-anchor="middle" fill="#3b82f6" font-size="5px" dy=".3em"
			>{text}
		</text>

		<text x="50%" y="50%" text-anchor="middle" fill="#3b82f6" font-size="4px" dy="1.8em"
			>{percentage}%</text
		>
	</svg>
</div>

<style>
	.circular-chart {
		display: block;
		margin: 10px auto;
		max-width: 80%;
		max-height: 250px;
	}

	.circle {
		stroke: #3b82f6;
		fill: none;
		stroke-width: 2.8;
		stroke-linecap: round;
		animation: progress 1s ease-out forwards;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}
</style>
