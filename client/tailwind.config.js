/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kalam': ['Kalam', 'cursive'],
        'kaushan': ['Kaushan Script', 'cursive'],
        'opensans': ['Open Sans', 'sans - serif'],
        'poppins': ['Poppins', 'sans- serif']
      },
    },
  },
  plugins: [],
}
