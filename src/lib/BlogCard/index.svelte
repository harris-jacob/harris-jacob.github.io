<script lang="ts">
	import type { PostMetadata } from '$lib/types';

	export let data: PostMetadata;
</script>

<a href={`/${data.slug}`}>
	<img width="1rem" height="1rem" src={`/images/posts/${data.slug}.jpg`} alt={data.coverAlt} />
	<h2>{data.title}</h2>
	<p>{data.excerpt}</p>
	<date>{data.date}</date>
</a>
