<script lang="ts">
	import Hero from '$lib/Hero/index.svelte';
	import BlogCard from '$lib/BlogCard/index.svelte';
	import { baseUrl, description, keywords, title } from '$lib/meta';
	import type { PageData } from './+page';

	export let data: PageData;
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
	<BlogCard data={data[0]} />
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}
</style>
