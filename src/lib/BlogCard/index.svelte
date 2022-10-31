<script lang="ts">
	import type { PostMetadata } from '$lib/types';
	import Badge from '$lib/Badge/index.svelte';
	import dateFormat from 'dateformat';

	export let data: PostMetadata;
</script>

<li>
	<a href={`/${data.slug}`}>
		<img src={`/images/posts/${data.slug}.jpg`} alt={data.coverAlt} />
		<div class="content">
			<div class="tags">
				{#each data.tags as tag}
					<Badge>{tag}</Badge>
				{/each}
			</div>
			<h2>{data.title}</h2>
			<p>{data.excerpt}</p>
			<date>{dateFormat(data.date, 'UTC:dd/mm/yyyy')}</date>
		</div>
	</a>
</li>

<style>
	a {
		all: unset;
		cursor: pointer;
	}
	li:hover {
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
	}
	h2 {
		font-weight: 500;
	}

	li {
		all: unset;
		border-radius: 16px;
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
		width: 20rem;
		transition: 0.3s;
	}

	date {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
	img {
		border-top-right-radius: 16px;
		border-top-left-radius: 16px;
		display: block;
		margin: auto;
		object-fit: cover;
		height: 200px;
		width: 100%;
	}
	.content {
		position: relative;
		padding: 2rem;
		height: 200px;
	}
</style>
