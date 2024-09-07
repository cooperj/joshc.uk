import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: {
					100: "#cfd1d3",
					200: "#9ea3a6",
					300: "#6e747a",
					400: "#3d464d",
					500: "#0d1821",
					600: "#0a131a",
					700: "#080e14",
					800: "#050a0d",
					900: "#030507"
				},
				teal: {
					100: "#dfeae8",
					200: "#c0d6d2",
					300: "#a0c1bb",
					400: "#81ada5",
					500: "#61988e",
					600: "#4e7a72",
					700: "#3a5b55",
					800: "#273d39",
					900: "#131e1c"
				},
				green: {
					100: "#d4dbd0",
					200: "#aab8a1",
					300: "#7f9472",
					400: "#557143",
					500: "#2a4d14",
					600: "#223e10",
					700: "#192e0c",
					800: "#111f08",
					900: "#080f04"
				}, 
				white: {
					100: "#fcfdfc",
					200: "#f9fbf9",
					300: "#f6f8f5",
					400: "#f3f6f2",
					500: "#f0f4ef",
					600: "#c0c3bf",
					700: "#90928f",
					800: "#606260",
					900: "#303130"
				},
				orange: {
					100: "#ffecd2",
					200: "#ffd9a4",
					300: "#ffc577",
					400: "#ffb249",
					500: "#ff9f1c",
					600: "#cc7f16",
					700: "#995f11",
					800: "#66400b",
					900: "#332006"
				}
			},
		},
	},
	plugins: [],
}
