const colors = {
  beige: "#efe8e6",
  blue: "#154194",
  lilac: "#b16fab",
  "lilac-light": "#d0a9cd",
  green: "#00a87a",
  "green-light": "#66cbaf",
  yellow: "#fcc433",
  "yellow-light": "#fdd670",
  salmon: "#ee7775",
  "salmon-light": "#f5adac",
  "neutral-900": "#141416",
  "neutral-800": "#23262F",
  "neutral-700": "#353945",
  "neutral-600": "#777e90",
  "neutral-500": "#b1b5c3",
  "neutral-400": "#e6e8ec",
  "neutral-300": "#f4f5f6",
  "neutral-200": "#fcfcfd",
  "neutral-100": "#ffffff",
};

const extendedColors = {
  ...colors,
  primary: colors.blue,
  secondary: colors.lilac,
  "secondary-light": colors["lilac-light"],
  fill: colors.beige,
  success: colors.green,
  "success-light": colors["green-light"],
  warning: colors.yellow,
  "warning-light": colors["yellow-light"],
  danger: colors.salmon,
  "danger-light": colors["salmon-light"],
};

module.exports = {
  colors: extendedColors,
};
