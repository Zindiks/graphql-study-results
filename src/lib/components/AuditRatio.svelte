<script>
	export let auditRatio;
	export let auditRatioUp;
	export let auditRatioDown;

	import ArrowUp from 'svelte-radix/ArrowUp.svelte';
	import ArrowDown from 'svelte-radix/ArrowDown.svelte';

	const upAmount = auditRatioUp.sum.amount / 1000000;
	const downAmount = auditRatioDown.sum.amount / 1000000;

	const largestNum = Math.max(upAmount, downAmount);

	const upPerc = ((upAmount / largestNum) * 100).toFixed();
	const downPerc = ((downAmount / largestNum) * 100).toFixed();
</script>

<div class="text-white bg-slate-900 rounded-md p-8">
	<p class="text-2xl text-slate-200">Audits ratio</p>

	<!-- Progress Up -->
	<div class="flex py-2">
		<svg class="w-3/4 h-4 my-auto" viewBox="0 0 100 4" preserveAspectRatio="none">
			<rect width="100%" height="100%" fill="#1e293b" rx="2" ry="2"></rect>
			<rect class="progress-up" width="{upPerc}%" height="100%" fill="#3b82f6" rx="2" ry="2"></rect>
		</svg>
		<div class="w-1/4 pl-4 text-sm">
			<p class="text-end">{upAmount.toFixed(2)} MB</p>
			<div class="flex">
				<ArrowUp />
				<p>Done</p>
			</div>
		</div>
	</div>

	<!-- Progress Down -->
	<div class="flex py-2">
		<svg class="w-3/4 h-4 my-auto" viewBox="0 0 100 4" preserveAspectRatio="none">
			<rect width="100%" height="100%" fill="#1e293b" rx="2" ry="2"></rect>
			<rect class="progress-down" width="{downPerc}%" height="100%" fill="#64748b" rx="2" ry="2"
			></rect>
		</svg>
		<div class="w-1/4 pl-4 text-sm">
			<div class="flex">
				<ArrowDown />
				<p class="text-sm">Receive</p>
			</div>
			<p class="text-end">{downAmount.toFixed(2)} MB</p>
		</div>
	</div>

	<div>
		<p class="text-6xl font-bold">{auditRatio.toFixed(2)}</p>
	</div>
</div>

<style>
	.progress-up {
		animation: progress-up 1s ease-out forwards;
	}

	.progress-down {
		animation: progress-down 1s ease-out forwards;
	}
	    @keyframes progress-up {
        0% {
            width: 0;
        }
        100% {
            width: upPerc;
        }
    }

    @keyframes progress-down {
        0% {
            width: 0;
        }
        100% {
            width: downPerc;
        }
    }

</style>
