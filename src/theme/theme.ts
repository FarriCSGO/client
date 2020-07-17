export const Theme = {
  colors: {
    orange: "#f37335",
    dark: "#0a0a0a",
    light: "#f0f0f0"
  },

  size: {
    medium: "only screen and (max-width: 876px) and (min-width: 648px)",
    small: "only screen and (max-width: 647px)"
  }
};

export type ThemeType = typeof Theme;
