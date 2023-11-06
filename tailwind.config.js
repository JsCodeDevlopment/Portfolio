/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#141517",
        first: "#E83752",
        second: "#F2D058",
        thirt: "#181818",
      },
      fontFamily: {
        poppins: "poppins",
        title: "kanit",
      },
      backgroundImage: {
        "gradient-radial": "linear-gradient(214deg, #F2D058 18.99%, #E83752 69.44%)",
        "home-Img": "url('./src/assets/images/homeImg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
