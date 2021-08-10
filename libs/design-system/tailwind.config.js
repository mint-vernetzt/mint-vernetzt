const defaultTheme = require("tailwindcss/defaultTheme");

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

const customFontSizes = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
let fontSizeSafeList = [];
customFontSizes.forEach((fontSize) => {
  fontSizeSafeList = fontSizeSafeList.concat([`text-${fontSize}`]);
});

module.exports = {
  purge: {
    content: ["../**/*.ts", "../**/*.tsx"],
    safelist: [...colorSafelist, ...fontSizeSafeList],
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
    fontSize: {
      h1: defaultTheme.fontSize["5xl"],
      h2: defaultTheme.fontSize["4xl"],
      h3: defaultTheme.fontSize["3xl"],
      h4: defaultTheme.fontSize["2xl"],
      h5: defaultTheme.fontSize.xl,
      h6: defaultTheme.fontSize.lg,
      p: defaultTheme.fontSize.base,
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
    },
  },
  plugins: [],
};
