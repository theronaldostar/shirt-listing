import type { SVGProps } from "react";

const Plus = (props: SVGProps<SVGSVGElement>) => (
	<svg width={10} height={10} className="text-gray-900 dark:text-white" viewBox="0 0 18 18" {...props}>
		<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
	</svg>
);

export { Plus };
