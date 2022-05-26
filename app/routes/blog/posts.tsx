import { Outlet, Link } from '@remix-run/react';

export default function PostsLayout() {
	return (
		<div>
			<div className="mb-6">
				<Link to="/blog">← All Posts</Link>
			</div>

			<div className="blog-post">
				<Outlet />
			</div>
		</div>
	);
}
