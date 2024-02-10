/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*/*/**.{html,js,ts,tsx}",
    "/styles/global.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["KaiseiHarunoUmi", "serif"],
      },
      colors: {
        blue: "#9DB2BF",
        navy: "#232830",
      },
      fontSize: {
        "2xs": "12px",
        xs: "16px",
        sm: "21px",
        base: "25px",
        lg: "50px",
        xl: "55px",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
      },
    },
  },
  plugins: [],
};
