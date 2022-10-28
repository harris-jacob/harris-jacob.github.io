<script lang="ts">
	import Hero from '$lib/Hero/index.svelte';
	import { baseUrl, description, keywords, title } from '$lib/meta';
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	<meta property="og:image" content="{baseUrl}/images/posts/hello-world.jpg" />
	<meta name="twitter:image" content="{baseUrl}/images/posts/hello-world.jpg" />
</svelte:head>

<div>
	<Hero />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}
</style>
