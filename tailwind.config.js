/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'dark': '#1E1B1E',
        'light': '#fff',
        'l-light': '#cccccc',
        'gray': '#292929',
        'light-gray': '#9e9e9e',
        'primary': '#F24333',
        'light-p': '#E26C61',
      },
      fontFamily: {
        Montserrat: "sans-serif",
      },
    },
  },
  plugins: [],
}