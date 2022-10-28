import type { Post, PostMetadata } from '$lib/types';

export type PageData = Array<PostMetadata>;

export const load = (): PageData => {
	const vals = Object.values(
		import.meta.glob<Post>(`../lib/posts/*.md`, {
			eager: true
		})
	).map((post) => post.metadata);

	console.log(vals);

	return vals;
};
