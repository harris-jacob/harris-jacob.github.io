<script lang="ts">
	import Header from '$lib/Header/index.svelte';
</script>

<Header />
<main class="container">
	<slot />
</main>

<style>
	:root {
		--background: #f4f4f9;
		--text: #1e1e24;
		--primary: #c57b57;
	}

	.container {
		max-width: 1200px;
		margin: auto;
	}

	:global(body) {
		margin: 0px;
		background: var(--background);
		color: var(--text);
		font-family: 'Noto Sans HK', 'Helvetica', sans-serif;
	}
</style>
