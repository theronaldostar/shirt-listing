import type { Config } from "tailwindcss";

import * as extend from "shared/theme";

const config: Config = {
	content: ["**/*.{js,ts,jsx,tsx}", "app/**/*.{js,ts,jsx,tsx}", "shared/**/*.{js,ts,jsx,tsx}"],
	theme: { extend },
	plugins: [],
};

export default config;
