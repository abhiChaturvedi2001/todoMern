/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.4)",
    },
  },
  plugins: [],
}