import { Outlet, Link, useLocation } from '@remix-run/react';

export default function PostsLayout() {
	const { pathname } = useLocation();
	const isTopLevel = pathname === '/blog';

	return (
		<div className="pb-48">
			{!isTopLevel && (
				<div className="mb-4">
					<Link to="/blog">← All Posts</Link>
				</div>
			)}

			<div className={isTopLevel ? '' : 'blog-post'}>
				<Outlet />
			</div>
		</div>
	);
}
