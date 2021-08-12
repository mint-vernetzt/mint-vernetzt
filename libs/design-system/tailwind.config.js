const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const customColors = {
  beige: "#efe8e6",
  blue: "#154194",
  lilac: "#b16fab",
  yellow: "#fcc433",
  green: "#00a87a",
  salmon: "#ee7775",
};

const extendedCustomColors = {
  ...customColors,
  success: customColors.green,
  warning: customColors.yellow,
  danger: customColors.salmon,
};

let colorSafelist = [];
Object.keys(extendedCustomColors).forEach((color) => {
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
    content: ["../**/*.ts", "../**/*.tsx"],
    safelist: [...colorSafelist],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...extendedCustomColors,
      },
    },
    fontFamily: {
      sans: ["'Lato'", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      console.log(theme);
      addBase({
        h1: {
          fontSize: theme("fontSize.5xl"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        h4: {
          fontSize: theme("fontSize.2xl"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        h5: {
          fontSize: theme("fontSize.xl"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          textTransform: "uppercase",
          fontWeight: "bold",
        },
        p: { fontSize: theme("fontSize.base") },
      });
    }),
  ],
};
