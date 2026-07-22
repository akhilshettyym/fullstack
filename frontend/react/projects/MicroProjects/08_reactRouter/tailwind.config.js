/** @type {import('tailwindcss').Config} */
export default {
  content: [ // ✅ Fixed property name
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}