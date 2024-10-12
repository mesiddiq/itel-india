/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'itel-red':'#ff0037',
        'bg/primary/1': '#f8f6f3',
        'grey/grey/2': '#d9d9d9',
        'grey/grey/3': '#949494',
        'grey/grey/4': '#666666',
        'grey/grey/100': '#c0c0c0',
        'brand/black':'#1c1b1b',
        's24/from':'#ffcf92',
        's24/to':'#ffe8cb',
        's23p/from':'#ca86ff',
        's23p/to':'#85e2fd',
        's23/from':'#DACFF9',
        's23/to':'#5C5C7E',
      },
    },
  },
  plugins: [],
}