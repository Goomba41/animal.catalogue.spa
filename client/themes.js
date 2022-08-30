var Color = require("./node_modules/color-js/color");

module.exports = {
  defaultTheme: {
    extend: {
      colors: {
        primary: "#3aafa9",
        contrast: "#FFA055",
        "primary-dark": "#2b7a78",
        "primary-dark-hover": Color("#2b7a78").lightenByRatio(0.25).toCSS(),
        "primary-light": "#def2f1",
        "primary-light-hover": Color("#def2f1").darkenByRatio(0.25).toCSS(),
        black: "#17252a",
        white: "#feffff",
      },
    },
  },
  themes: [
    {
      name: "test-theme",
      extend: {
        colors: {
          primary: "#A7C8E7",
          contrast: "#FFE0B3",
          "primary-dark": "#366796",
          "primary-dark-hover": Color("#366796").lightenByRatio(0.25).toCSS(),
          "primary-light": "#C1DAF3",
          "primary-light-hover": Color("#C1DAF3").darkenByRatio(0.25).toCSS(),
          black: "#17252a",
          white: "#feffff",
          important: "#FFE0B3",
        },
      },
    },
  ],
};
