<script lang="ts">
	interface Data {
		imageAlt: string;
		slug: string;
		title: string;
		description: string;
		posted: Date;
	}

	let data: Data;
</script>

<a href={`/${data.slug}`}>
	<img width="1rem" height="1rem" src={`/images/posts/${data.slug}.jpg`} alt={data.imageAlt} />
	<h2>{data.title}</h2>
	<p>{data.description}</p>
	<date>{data.posted}</date>
</a>
