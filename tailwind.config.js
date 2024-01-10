/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'default-bg': "url('../public/images/default-bg.png')",
    },
    extend: {
    },
  },
  plugins: [],
}

