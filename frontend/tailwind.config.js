/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#1e40af",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}