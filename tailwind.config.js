/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['arial','sans-serif'],
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin')
  ],
}