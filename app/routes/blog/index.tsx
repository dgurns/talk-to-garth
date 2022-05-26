import { Link } from '@remix-run/react';

export function meta() {
	return {
		title: 'Dan Gurney - Blog',
	};
}

export default function Blog() {
	return (
		<div>
			<h1 className="mb-6">Blog</h1>
			<div className="text-gray-400">May 26, 2022</div>
			<Link to="/blog/posts/making-of">How This Site Was Made</Link>
		</div>
	);
}
