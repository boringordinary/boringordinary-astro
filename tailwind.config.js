/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: 'class',
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
			colors: {
				'primary': {
					'50': '#fef1fa',
					'100': '#fee5f7',
					'200': '#ffcbf0',
					'300': '#ffa0e3',
					'400': '#ff65cd',
					'500': '#fc38b5',
					'600': '#ed1594',
					'700': '#cf0777',
					'800': '#aa0a61',
					'900': '#8e0d54',
				},
				"orange": {
					"50": "#ffa847",
					"100": "#ff9e3d",
					"200": "#ff9433",
					"300": "#ff8a29",
					"400": "#ff801f",
					"500": "#ff7615",
					"600": "#f56c0b",
					"700": "#eb6201",
					"800": "#e15800",
					"900": "#d74e00"
				},
				"purple": {
					"50": "#ea43ff",
					"100": "#e039ff",
					"200": "#d62fff",
					"300": "#cc25ff",
					"400": "#c21bff",
					"500": "#b811ff",
					"600": "#ae07f5",
					"700": "#a400eb",
					"800": "#9a00e1",
					"900": "#9000d7"
				}
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@headlessui/tailwindcss')
	],
}
