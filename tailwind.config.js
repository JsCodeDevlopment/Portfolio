/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#141517',
        'first': '#E83752',
        'second': '#F2D058',
      },
      fontFamily: {
        poppins: "",
        title: "",
      },
    },
  },
  plugins: [],
}