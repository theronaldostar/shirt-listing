import type { SVGProps } from "react";

const Less = (props: SVGProps<SVGSVGElement>) => (
	<svg width={10} height={10} className="text-gray-900 dark:text-white" viewBox="0 0 18 2" {...props}>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
	</svg>
);

export { Less };
