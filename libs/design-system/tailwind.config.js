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
    lineHeight: {
      ...defaultTheme.lineHeight,
      snug: "1.333333",
    },
    flex: {
      ...defaultTheme.flex,
      100: "0 0 100%",
      "1/4": "0 0 25%",
      "1/3": "0 0 33.3333%",
      "1/2": "0 0 50%",
      "2/3": "0 0 66.66666%",
    },
    minHeight: {
      ...defaultTheme.minHeight,
      12.5: "12.5rem",
      "3/4": "75%",
    },
    maxWidth: {
      ...defaultTheme.maxWidth,
      "1/2": "50%",
      "3/4": "75%",
    },
    spacing: {
      ...defaultTheme.spacing,
      18: "4.5rem",
      22: "5.5rem",
    },
    zIndex: {
      ...defaultTheme.zIndex,
      "-1": "-1",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      boxes: "0 7px 38px -4px rgba(0, 0, 0, 0.2)",
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
      borderStyle: ["hover", "focus"],
      borderWidth: ["last"],
      padding: ["first"],
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
          color: theme("colors.blue-500"),
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: "bold",
          color: theme("colors.blue-500"),
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: "bold",
          color: theme("colors.blue-500"),
        },
        h4: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: "bold",
          color: theme("colors.blue-500"),
        },
        h5: {
          fontSize: theme("fontSize.xl"),
          fontWeight: "bold",
          color: theme("colors.blue-500"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontWeight: "bold",
          color: theme("colors.blue-500"),
        },
        p: {
          fontSize: theme("fontSize.base"),
          color: theme("colors.text-neutral-600"),
        },
      });
    }),
  ],
};
