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
				Before that, I worked at CarTrawler and UBiqube, ran a freelance
				consultancy, and founded a startup called Concert Window.
			</p>
			<p>
				I love open source and enjoy working on side projects when time permits.
			</p>
			<p>
				I often use React, Svelte, Node, TypeScript, Go, Python, REST, GraphQL,
				CSS, Tailwind, NextJS, Remix, Figma, Jest, React Testing Library,
				Playwright, Postgres, MySQL, all manner of AWS and GCP services,
				Cloudflare, Vercel, Planetscale, Docker, Kubernetes, and CI/CD.
			</p>
			<p>
				Have a question or idea? Please feel free to{' '}
				<a href="mailto:dan@dangurney.net">get in touch</a>.
			</p>

			<h2 className="mt-8">Recent Projects</h2>
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
						Lambda, BigQuery, Kubernetes, Vercel, and GitHub Actions.
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
						used include Remix, Tailwind, Prisma, PlanetScale, and Vercel.
					</div>
				</li>
			</ul>

			<h2 className="mt-8">Testimonials</h2>
			<ul className="list-none mt-6 space-y-4">
				<li>
					<div>
						"Dan Gurney has the ability to see the big picture and the skills to
						get there. Dan uses his expertise to build quality features at
						lightning speed... It's apparent that he values a positive company
						culture. He takes the time to get to know his team members, which
						results in a cohesive team that is able to accomplish complex
						projects. As both a team member and leader, Dan has my highest
						recommendation."
					</div>
					<span className="text-gray-400">
						- Terry Gleckler, Operations Manager at PredictionHealth
					</span>
				</li>
				<li>
					<div>
						"He's a brilliant engineer but also a steady leader and great team
						player. His attention to detail and thoughtfulness about his work
						were exemplary, and his ability to work through tough problems
						collaboratively was integral to building a great Product. He can
						pretty much do it all and isn't afraid to jump in and get things
						built quickly, while also never sacrificing quality."
					</div>
					<span className="text-gray-400">
						- Kate Celauro, Customer Success Manager at PredictionHealth
					</span>
				</li>
				<li>
					<div>
						"Dan is a fantastic coder and teacher. He plans things meticulously.
						His code is clean, readable and easy to review. He stays up to date
						with the emerging libraries and technologies... He implemented our
						entire CI/CD pipeline, with automated tests, while communicating
						with other teams to ensure consistency across the board. Can't
						recommend him enough as a co-worker and programmer. I have learned a
						huge amount working alongside him. He is always happy to lend a hand
						in a constructive way."
					</div>
					<span className="text-gray-400">
						- Emer Mooney, Product Engineer at Intercom
					</span>
				</li>
				<li>
					<div>
						"It's very rare to see someone come into a team and become a key
						member so quickly. I was really impressed with how Dan approached
						his work and ensured it was delivered on time and with the highest
						quality. Dan is ridiculously efficient, you don't need to tell him
						anything twice and he immerses himself in his work soaking up
						everything. It was an absolute pleasure to work with Dan, his work
						ethic and coffee making skills are top class. Thanks, Dan!"
					</div>
					<span className="text-gray-400">
						- Phil Kearney, Lead Software Engineer at Personio
					</span>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/dangurney/details/recommendations/?detailScreenTabIndex=0"
					>
						Read more testimonials on LinkedIn ↗
					</a>
				</li>
			</ul>
		</div>
	);
}
