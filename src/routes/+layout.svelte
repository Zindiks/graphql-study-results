<script>
	import '../app.css';

	import src from '../assets/pattern.svg';

	import { Toaster } from 'svelte-french-toast';
</script>

<Toaster />
<div class="h-screen bg-slate-950" style="background-image: url({src})">
	<slot />
</div>


