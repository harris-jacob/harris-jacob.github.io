interface Params {
	slug: string;
}

export interface Post {
	metadata: {
		slug: string;
		title: string;
		tags: Array<string>;
		date: Date;
		excerpt: string;
	};
	default: SvelteComponentConstructor<any, any>;
}

export interface PageData {
	page: SvelteComponentConstructor<any, any>;
	title: string;
	tags: Array<string>;
	date: Date;
	excerpt: string;
}

export type PageLoad = ({ params }: { params: Params }) => PageData;
