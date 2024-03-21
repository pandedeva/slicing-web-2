/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        dust: {
          DEFAULT: "#F7F7FB",
          200: "#E8E8FB",
          300: "#BFBFE3",
        },

        yellow: {
          50: "#FFFDEB",
          100: "#FEFAD7",
          200: "#FEF5AA",
          300: "#FDF181",
          400: "#FDEC59",
          500: "#FCE72D",
          600: "#ECD503",
          700: "#B09F02",
          800: "#746802",
          900: "#3C3601",
          950: "#1E1B00",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/public/img/hero.png)",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
