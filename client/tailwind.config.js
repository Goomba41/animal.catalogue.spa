/** @type {import('tailwindcss').Config} */

const themes = require("./themes");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-themer")(themes)],
  theme: {
    extend: {
      colors: {
        vk: "#4c75a3",
        instagram: "#e4405f",
      },
    },
  },
};
