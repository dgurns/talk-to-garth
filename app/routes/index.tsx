import { Link } from '@remix-run/react';

export default function Index() {
	return (
		<div className="flex flex-col items-center justify-center p-4 md:p-8 mb-24">
			<div className="flex flex-col items-center justify-center text-center mt-8 md:mt-16">
				<img
					src="/images/DanGurneyPhotoCircle.png"
					alt="Dan Gurney"
					className="h-36"
				/>
				<h1 className="mt-4">👋🏻 Hi, I'm Dan</h1>

				<ul className="mt-12 space-y-2">
					<li>
						I'm lead engineer at Prediction Health.{' '}
						<Link to="/software">Go to Software 👨🏻‍💻</Link>
					</li>
					<li>
						I play the accordion. <Link to="/music">Go to Music 🪗</Link>
					</li>
					<li>
						Sometimes I write blog posts. <Link to="/blog">Go to Blog 💡</Link>
					</li>
				</ul>

				<div className="flex flex-row items-center space-x-4 mt-10">
					<a href="https://www.linkedin.com/in/dangurney/">
						<img
							src="/images/LinkedIn-White-96.png"
							alt="LinkedIn"
							className="h-6 hover:scale-125 transition-all"
						/>
					</a>
					<a href="https://github.com/dgurns">
						<img
							src="/images/GitHub-White-120.png"
							alt="GitHub"
							className="h-6 hover:scale-125 transition-all"
						/>
					</a>
					<a
						href="mailto:dan@dangurney.net"
						className="text-gray-600 text-3xl hover:no-underline hover:scale-125 transition-all"
					>
						✉️
					</a>
				</div>
			</div>
		</div>
	);
}
