const customColors = {
  beige: "#f4e8e0",
  blue: "#164194",
  lilac: "#c8acd3",
  yellow: "#fdc533",
  green: "#42b38c",
  salmon: "#f6afad",
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
