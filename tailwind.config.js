/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Fira Sans", "--apple-system", "BlinkMacSystemFont", "sans-serif"],
			serif: ["PT Serif, Fira Sans, Georgia, serif"],
			script: [
				"Nanum Pen Script, --apple-system, BlinkMacSystemFont, sans-serif",
			],
		},
		extend: {
		}
	},
	plugins: [],
}
