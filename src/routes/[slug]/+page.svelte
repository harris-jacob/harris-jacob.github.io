<script lang="ts">
	import type { PageData } from './types';
	import dateFormat from 'dateformat';
	import Badge from '$lib/Badge/index.svelte';

	import '$lib/prism-theme/nord.css';

	export let data: PageData;
</script>

<article>
	<h1 class="title">{data.title}</h1>
	<h2 class="date">Published on {dateFormat(data.date, 'UTC:dd mmmm yyyy')}</h2>
	<div class="tags">
		{#each data.tags as tag, index}
			<Badge num={index}>{tag}</Badge>
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
