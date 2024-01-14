/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'minecraftia': ['minecraftia', 'sans-serif']
      },
      colors: {
        'button': '#81e6d9',
        'button-hover': '#66d3c4'
      }
    },
  },
  plugins: [],
}

