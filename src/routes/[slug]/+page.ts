import type { PageData, Post, PageLoad } from './types';

export const load: PageLoad = ({ params }): PageData => {
	const { slug } = params;
	const posts = import.meta.glob<Post>(`../../lib/posts/*.md`, {
		eager: true
	});

	const filteredPost = Object.values(posts).find((post) => {
		return post.metadata.slug.toLowerCase() === slug.toLowerCase();
	});

	if (filteredPost === undefined) {
		throw new Error('unknown post requested');
	}

	return {
		page: filteredPost.default,
		title: filteredPost.metadata.title,
		tags: filteredPost.metadata.tags,
		date: filteredPost.metadata.date,
		excerpt: filteredPost.metadata.excerpt,
		slug: filteredPost.metadata.slug
	};
};
