/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#171717',
        'white': '#f8fafc'
      }
    },
  },
  plugins: [],
}
