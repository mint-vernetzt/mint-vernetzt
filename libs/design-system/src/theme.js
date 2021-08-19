const colors = {
  beige: "#efe8e6",
  blue: "#154194",
  "lilac-500": "#b16fab",
  "lilac-300": "#d0a9cd",
  green: "#66cbaf",
  yellow: "#fdd05c",
  salmon: "#f5adac",
};

const extendedColors = {
  ...colors,
  primary: colors.blue,
  secondary: colors["lilac-300"],
  fill: colors.beige,
  success: colors.green,
  warning: colors.yellow,
  danger: colors.salmon,
};

module.exports = {
  colors: extendedColors,
};
