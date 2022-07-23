import { Link } from '@remix-run/react';
import { useState } from 'react';
import { posts } from 'app/routes/blog/index';

export const meta = () => ({
	title: 'Dan Gurney - Personal Site',
});

const mostRecentPost = posts[0];

export default function Index() {
	const [showYears, setShowYears] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center text-center mt-8 md:mt-16">
			<img
				src="/images/DanGurneyPhotoCircle.png"
				alt="Dan Gurney"
				className="h-36"
			/>
			<h1 className="mt-4">👋🏻 Hi, I'm Dan</h1>

			<ul className="mt-12 space-y-2">
				<li>
					I'm <Link to="/software">lead engineer</Link> at Prediction Health
				</li>
				<li>
					I play the <Link to="/music">accordion</Link>
				</li>
				{mostRecentPost && (
					<li>
						Latest blog post:{' '}
						<Link to={`/blog/${mostRecentPost.slug}`}>
							{mostRecentPost.title}
						</Link>
					</li>
				)}
			</ul>

			<footer className="flex flex-row items-center space-x-4 mt-10">
				<a href="https://www.linkedin.com/in/dangurney/">
					<img
						src="/images/LinkedIn-White-96.png"
						height={24}
						width={24}
						alt="LinkedIn"
						className="md:hover:scale-125 md:transition-all"
					/>
				</a>
				<a href="https://github.com/dgurns">
					<img
						src="/images/GitHub-White-120.png"
						height={24}
						width={24}
						alt="GitHub"
						className="md:hover:scale-125 md:transition-all"
					/>
				</a>
				<a
					href="mailto:dan@dangurney.net"
					className="text-gray-600 text-3xl md:hover:no-underline md:hover:scale-125 md:transition-all"
				>
					✉️
				</a>
			</footer>

			<div className="text-center text-gray-400 text-sm mt-2">
				<button onClick={() => setShowYears(!showYears)}>
					<ul>
						<li>2022: Year of the Comeback</li>
						{showYears && (
							<>
								<li>2021: Year of the Upside</li>
								<li>2020: Year of the Launch</li>
								<li>2019: Year of the Unexpected</li>
								<li>2018: Year of No Filter</li>
								<li>2017: Year of the Wild</li>
								<li>2016: Year of the High Life</li>
								<li>2015: Year of the Big Picture</li>
								<li>2014: Year of the Nuance</li>
							</>
						)}
					</ul>
				</button>
			</div>
		</div>
	);
}
