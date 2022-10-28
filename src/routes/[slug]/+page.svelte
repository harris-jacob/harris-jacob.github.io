<script lang="ts">
	import dateFormat from 'dateformat';
	import Badge from '$lib/Badge/index.svelte';
	import { keywords, title, baseUrl } from '$lib/meta';

	import '$lib/prism-theme/nord.css';
	import type { PageData } from './+page';

	export let data: PageData;
</script>

<svelte:head>
	<meta name="keywords" content={data.tags.concat(keywords).join(', ')} />

	<meta name="description" content={data.excerpt} />
	<meta property="og:description" content={data.excerpt} />
	<meta name="twitter:description" content={data.excerpt} />

	<title>{data.title} - {title}</title>
	<meta property="og:title" content="{data.title} - {title}" />
	<meta name="twitter:title" content="{data.title} - {title}" />

	<meta property="og:image" content="{baseUrl}/images/posts/{data.slug}.jpg" />
	<meta name="twitter:image" content="{baseUrl}/images/posts/{data.slug}.jpg" />
</svelte:head>

<article>
	<h1 class="title">{data.title}</h1>
	<h2 class="date">Published on <date>{dateFormat(data.date, 'UTC:dd mmmm yyyy')}</date></h2>
	<div class="tags">
		{#each data.tags as tag}
			<Badge>{tag}</Badge>
		{/each}
	</div>
	<svelte:component this={data.page} />
</article>

<style>
	article {
		padding-left: 16px;
		padding-right: 16px;
		max-width: 720px;
		margin: auto;
	}

	.title {
		font-size: 2.5rem;
		text-align: center;
		padding-top: 32px;
		margin: 0;
	}

	.tags {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 32px;
	}

	.date {
		width: 100%;
		font-size: 1rem;
		font-weight: 400;
		text-align: center;
		padding-top: 8px;
	}
</style>
