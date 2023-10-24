/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud': "url('/src/assets/cloud-bg.jpg')",
      }
    },
  },
  plugins: [],
}