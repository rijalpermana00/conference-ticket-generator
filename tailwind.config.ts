import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				neutral: {
					0: "hsl(0, 0%, 100%)",
					300: "hsl(252, 6%, 83%)",
					500: "hsl(245, 15%, 58%)",
					700: "hsl(245, 19%, 35%)",
					900: "hsl(248, 70%, 10%)",
				},
				orange: {
					500: "hsl(7, 88%, 67%)",
					700: "hsl(7, 71%, 60%)",
				},
				gradient: {
					text: "linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))",
				},
			},
		},
		screens: {
			mobile: "375px",
			desktop: "1440px",
		},
	},
	plugins: [],
}
export default config
