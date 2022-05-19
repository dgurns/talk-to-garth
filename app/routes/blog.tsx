export function meta() {
	return {
		title: 'Dan Gurney - Blog',
	};
}

export default function Blog() {
	return (
		<div className="p-4 md:p-8 mt-4 md:mt-8 flex flex-col items-center pb-48">
			<div className="max-w-xl">
				<h1 className="mb-6">Blog</h1>
				<p>This will be added as soon as I get some free time! </p>
				<p>
					My first post will probably be about the state of frontend frameworks
					and my thoughts after trying out NextJS, SvelteKit, and Remix (which
					this site is built with).
				</p>
			</div>
		</div>
	);
}
