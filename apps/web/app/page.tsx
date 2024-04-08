"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Next, React } from "shared/assets/image";

const Home = () => {
	const { push } = useRouter();

	return (
		<article className="flex flex-1 flex-col items-center justify-center gap-2">
			<div className="flex gap-8">
				<Link href="https://nextjs.org" target="_blank">
					<Next className="h-20 w-48 animate-bounce" />
				</Link>
				<Link href="https://react.dev" target="_blank">
					<React className="h-20 w-20 animate-[spin_infinite_20s_linear]" />
				</Link>
			</div>
			<h1>Next.js + JsonServer</h1>
			<div className="flex flex-col items-center gap-4 text-center">
				<button
					className="rounded-lg bg-blue-600 p-2 px-2.5 text-sm font-medium text-white transition hover:bg-blue-800 active:scale-90"
					onClick={() => push("/shirt")}>
					Go to route: /shirt
				</button>
				<p>
					Edit <code>apps/web/app/page.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Next and React logos to learn more</p>
		</article>
	);
};

export default Home;
