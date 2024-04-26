/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      textColor: "#fff",
      bgColor: "#1b1f24",
      secongBgColor: "#22282f",
      mainColor: "#13bbff",
      otherColor: "#c3cad5",
    },
    fontSize: {
      h1font: "4.5rem",
      h2font: "2.9rem",
      pfont: "1rem",
    },
    dropShadow: {
      "2xl": ["3px 3px 20px mainColor", "-2px 1px 30px #fff"],
    },

    fontFamily: {
      inter: ["Inter",],
    },

    extend: {},
  },
  plugins: [],
};
