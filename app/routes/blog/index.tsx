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
		title: 'Promo Video for "From the Bridge"',
		date: 'June 23, 2022',
		slug: 'promo-from-the-bridge',
	},
	{
		title: 'New Compositions for ITMA',
		date: 'June 2, 2022',
		slug: 'new-compositions-itma',
	},
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
			<ul className="space-y-4">
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
