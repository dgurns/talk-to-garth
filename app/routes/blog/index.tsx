import { Link } from '@remix-run/react';

export function meta() {
	return {
		title: 'Dan Gurney - Blog',
	};
}

interface Post {
	title: string;
	date: string;
	slug: string;
}
export const posts: Post[] = [
	{
		title: 'How This Site Was Made',
		date: 'May 26, 2022',
		slug: 'making-of',
	},
];

export default function Blog() {
	return (
		<div>
			<h1 className="mb-6">Blog</h1>
			<ul>
				{posts.map((p, index) => (
					<li key={index}>
						<div className="text-gray-400">{p.date}</div>
						<Link to={`/blog/${p.slug}`}>{p.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
