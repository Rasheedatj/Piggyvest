/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        md: "420px",
        sm: "768px",
        lg: "976px",
        xl: "1140px",
      },

      colors: {
        veryDarkBlue: "#0c1825",
        gray: "#ddd",
        lightBlue: "#0d60d8",
        white: "#fff",
        purple: "#7913e5",
        paragraphColor: "#353535",
        grayBg: "#f9f9f9",
        lightPurple: "#f7f0ff",
        lightGray: "rgba(221, 221, 221,.3)",
      },
    },
  },
  plugins: [],
};
