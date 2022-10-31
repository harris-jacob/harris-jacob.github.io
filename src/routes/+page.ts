import type { Post, PostMetadata } from '$lib/types';

export type PageData = Array<PostMetadata>;

export const load = (): PageData => {
	return Object.values(
		import.meta.glob<Post>(`../lib/posts/*.md`, {
			eager: true
		})
	).map((post) => post.metadata);
};
