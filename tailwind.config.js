/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
				'itel-red':'#ff0037',
				'bg/primary/1': '#f8f6f3',
				'grey/grey/2': '#d9d9d9',
				'grey/grey/3': '#949494',
				'grey/grey/4': '#666666',
				'grey/grey/100': '#c0c0c0',
				'brand/black':'#1c1b1b'
			},
			fontSize: {
				'desktop/h1': ['80px', {
					lineHeight: '96px',
					letterSpacing: '-2.4px',
					fontWeight: '500'
				}],
				'desktop/h2': ['48px', {
					lineHeight: '57.6px',
					letterSpacing: '-1.92px',
					fontWeight: '500'
				}],
				'desktop/h3': ['36px', {
					lineHeight: '46.8px',
					letterSpacing: '-0.72px',
					fontWeight: '500'
				}],
				'desktop/h4': ['24px', {
					lineHeight: '31.2px',
					letterSpacing: '-0.48px',
					fontWeight: '500'
				}],
				'desktop/h5': ['20px', {
					lineHeight: '26px',
					letterSpacing: '0.2px',
					fontWeight: '700'
				}],
				'desktop/h5/medium': ['28px', {
					lineHeight: '26px',
					letterSpacing: '-0.2px',
					fontWeight: '500'
				}],
				'desktop/h6/medium': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.16px',
					fontWeight: '500'
				}],
				'desktop/body/1': ['16px', {
					lineHeight: '25.6px',
					fontWeight: '400'
				}],
				'desktop/body/2/medium': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				
				'desktop/body/2/regular': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.14px',
					fontWeight: '400'
				}],
				'desktop/button': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.16px',
					fontWeight: '700'
				}],
				'desktop/body/large': ['20px', {
					lineHeight: '32px',
					letterSpacing: '-0.2px',
					fontWeight: '400'
				}],
				'desktop/subtitle': ['14px', {
					lineHeight: '22.4px',
					letterSpacing: '-0.28px',
					fontWeight: '500'
				}],
				'desktop/caption': ['12px', {
					lineHeight: '19.2px',
					letterSpacing: '-0.24px',
					fontWeight: '400'
				}],
				'desktop/title': ['16px', {
					lineHeight: '19.2px',
					letterSpacing: '0.32px',
					fontWeight: '500'
				}],
				'desktop/tertiary/cta': ['14px', {
					lineHeight: '22.4px',
					fontWeight: '500',
				}],
				'desktop/stikethrough/text': ['12px', {
					lineHeight: '19.2px',
					letterSpacing: '0.24px',
					fontWeight: '400',
				}],
				'': ['', {
					lineHeight: '',
					letterSpacing: '',
					fontWeight: ''
				}],
			}
		},
	},
	plugins: [],
}

