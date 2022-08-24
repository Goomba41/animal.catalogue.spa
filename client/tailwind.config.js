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
        telegram: "#0088cc",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        muted: "#6c757d",
      },
    },
  },
};
