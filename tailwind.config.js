/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['exo2', 'sans-serif'],
        'alegreya': ['alegreya', 'sans-serif']
      }
    },
  },
  plugins: [],
}

