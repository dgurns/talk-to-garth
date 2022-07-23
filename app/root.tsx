import type { MetaFunction } from '@remix-run/cloudflare';
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from '@remix-run/react';
import styles from './gen-styles/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Dan Gurney - Personal Site',
	viewport: 'width=device-width,initial-scale=1',
});

export function links() {
	return [
		{ rel: 'stylesheet', href: styles },
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/favicons/favicon-180x180.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '48x48',
			href: '/favicons/favicon-48x48.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicons/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicons/favicon-16x16.png',
		},
		{
			rel: 'shortcut icon',
			href: '/favicons/favicon.ico',
		},
	];
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

				<div className="flex flex-col items-center p-4 md:p-8 mt-4 md:mt-8">
					<div className="max-w-xl w-full pb-48">
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

export function ErrorBoundary() {
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
					<div className="max-w-xl w-full text-center">
						Oops! An error occurred. Please reload the page.
					</div>
				</div>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function CatchBoundary() {
	const caught = useCatch();
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
					<div className="max-w-xl w-full text-center">
						{caught.status} {caught.statusText}
					</div>
				</div>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
