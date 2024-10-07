/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'itel-red': '#FF0037',
        'secondary': '#050036',
      },
    },
  },
  plugins: [],
}