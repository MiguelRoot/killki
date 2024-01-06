/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'secondary': {
					'50': '#eefaff',
					'100': '#dcf5ff',
					'200': '#b2eeff',
					'300': '#6de2ff',
					'400': '#20d4ff',
					'500': '#00bfff',
					'600': '#009adf',
					'700': '#007ab4',
					'800': '#006795',
					'900': '#00547a',
					'950': '#00293e',
				},
				'primary': {
					'50': '#f4f4fe',
					'100': '#ebeafd',
					'200': '#d9d8fc',
					'300': '#bdb9f9',
					'400': '#9d91f4',
					'500': '#8873ef',
					'600': '#6944e3',
					'700': '#5a32cf',
					'800': '#4b29ae',
					'900': '#3f248e',
					'950': '#251560',
				},
				
			}
		},

	},
	plugins: [],
}
