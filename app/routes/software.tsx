export function meta() {
	return {
		title: 'Dan Gurney - Software',
	};
}

export default function Software() {
	return (
		<div>
			<h1 className="mb-6">Software</h1>
			<p>
				I'm lead engineer at{' '}
				<a href="https://predictionhealth.com" target="_blank" rel="noreferrer">
					PredictionHealth ↗
				</a>
				, where we are using AI to improve medical care.
			</p>
			<p>
				Before that, I worked at CarTrawler and UBiqube, did freelance projects,
				and founded a startup called Concert Window.
			</p>
			<p>
				I love open source and enjoy working on side projects when time permits.
			</p>
			<p>
				I often use React, Svelte, Node, TypeScript, Go, Python, REST, GraphQL,
				CSS, Tailwind, Figma, Jest, React Testing Library, Playwright, Postgres,
				MySQL, all manner of AWS and GCP services, Cloudflare, Vercel, Docker,
				Kubernetes, and CI/CD.
			</p>
			<p>
				Have a question or idea? Please feel free to{' '}
				<a href="mailto:dan@dangurney.net">get in touch</a>.
			</p>

			<h2 className="mt-8">Recent Projects:</h2>
			<ul className="list-none md:list-disc mt-6 space-y-4">
				<li>
					<a
						href="https://predictionhealth.com"
						target="_blank"
						rel="noreferrer"
					>
						PredictionHealth ↗
					</a>{' '}
					<span className="text-gray-400">(Lead Engineer)</span>
					<div>
						Over the past few years, I've rearchitected legacy React, Go, and
						Python apps, built a REST API with role-based access control, added
						event tracking, introduced TypeScript, set up scalable dev processes
						with automated CI/CD, mentored engineers, and worked on new product
						development, among many other things. Some tools I've used are
						React, NextJS, TypeScript, Playwright, Go, Python, gRPC, Docker, AWS
						Lambda, Kubernetes, Vercel, and GitHub Actions.
					</div>
				</li>
				<li>
					<a
						href="https://www.tradarchive.com"
						target="_blank"
						rel="noreferrer"
					>
						Trad Archive ↗
					</a>{' '}
					<span className="text-gray-400">(Creator, Principal Engineer)</span>
					<div>
						This is a really fun open source project I've been building in
						partnership with the Irish Traditional Music Archive in Dublin. The
						goal is to make their collections accessible to the public and use
						crowdsourcing to tag previously unheard recordings. Technologies
						used include NextJS, Tailwind, GraphQL, Apollo Client + Server,
						Serverless Framework, TypeORM, MySQL, PlanetScale, Vercel, and AWS.
					</div>
				</li>
			</ul>
		</div>
	);
}
