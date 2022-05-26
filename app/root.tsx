import type { MetaFunction } from '@remix-run/cloudflare';
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Dan Gurney - Personal Site',
	viewport: 'width=device-width,initial-scale=1',
});

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<nav className="flex flex-row justify-start px-4 py-2 space-x-4">
					<Link to="/" prefetch="render">
						Dan Gurney
					</Link>
					<span>/</span>
					<Link to="/software" prefetch="render">
						Software
					</Link>
					<Link to="/music" prefetch="render">
						Music
					</Link>
					<Link to="/blog" prefetch="render">
						Blog
					</Link>
				</nav>

				<div className="flex flex-col items-center p-4 md:p-8 mt-4 md:mt-8 pb-48">
					<div className="max-w-xl w-full">
						<Outlet />
					</div>
				</div>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
