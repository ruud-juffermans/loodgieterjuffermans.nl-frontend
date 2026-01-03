// theme/palette.js

import colors from "./colors";

const palette = {
  mode: "dark",

  primary: {
    main: colors.primary[500],
    light: colors.primary[300],
    dark: colors.primary[700],
    contrastText: colors.white,
  },

  secondary: {
    main: colors.secondary[500],
    light: colors.secondary[300],
    dark: colors.secondary[700],
    contrastText: colors.white,
  },

  background: {
    default: colors.grey[900],
    paper: colors.grey[800],
  },

  text: {
    primary: colors.grey[50],
    secondary: colors.grey[400],
    disabled: colors.grey[600],
  },

  divider: colors.grey[700],

  success: {
    main: colors.success,
  },

  warning: {
    main: colors.warning,
  },

  error: {
    main: colors.error,
  },

  info: {
    main: colors.info,
  },
};

export default palette;
