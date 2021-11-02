const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const lineClamp = require("@tailwindcss/line-clamp");
const { colors, fontSizes } = require("./src/theme");

let colorSafelist = [];
Object.keys(colors).forEach((color) => {
  colorSafelist = colorSafelist.concat([
    `bg-${color}`,
    `text-${color}`,
    `border-${color}`,
    `hover:bg-${color}`,
    `hover:text-${color}`,
    `hover:border-${color}`,
    `focus:bg-${color}`,
    `focus:text-${color}`,
    `focus:border-${color}`,
  ]);
});

module.exports = {
  purge: {
    content: ["../**/*.ts", "../**/*.tsx", "../../apps/website/**/*.tsx"],
    safelist: [...colorSafelist],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    fontFamily: {
      sans: ["'Source Sans Pro'", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      ...fontSizes,
    },
    flex: {
      ...defaultTheme.flex,
      100: "0 0 100%",
      "1/4": "0 0 25%",
      "1/3": "0 0 33.3333%",
      "1/2": "0 0 50%",
      "2/3": "0 0 66.66666%",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
      borderStyle: ["hover", "focus"],
      borderWidth: ["last"],
    },
  },
  plugins: [
    lineClamp,
    plugin(({ addBase, theme }) => {
      console.log(theme);
      addBase({
        h1: {
          fontSize: theme("fontSize.7xl"),
          fontWeight: "bold",
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: "bold",
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: "bold",
        },
        h4: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "bold",
        },
        h5: {
          fontSize: theme("fontSize.xl"),
          fontWeight: "bold",
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "bold",
        },
        p: { fontSize: theme("fontSize.base") },
      });
    }),
  ],
};
