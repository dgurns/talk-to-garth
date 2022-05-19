import type { MetaFunction } from '@remix-run/cloudflare';
import {
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
					<a href="/">Dan Gurney</a>
					<span>/</span>
					<a href="/software">Software</a>
					<a href="/music">Music</a>
					<a href="/blog">Blog</a>
				</nav>

				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
