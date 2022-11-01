import type { Post, PostMetadata } from '$lib/types';

export type PageData = { posts: Array<PostMetadata> };

export const load = (): PageData => {
	return {
		posts: Object.values(
			import.meta.glob<Post>(`../lib/posts/*.md`, {
				eager: true
			})
		).map((post) => post.metadata)
	};
};
