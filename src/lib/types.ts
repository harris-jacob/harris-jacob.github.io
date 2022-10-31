export interface PostMetadata {
	slug: string;
	title: string;
	tags: Array<string>;
	date: Date;
	excerpt: string;
	coverAlt: string;
}

export interface Post {
	metadata: PostMetadata;
	default: SvelteComponentConstructor<any, any>;
}
