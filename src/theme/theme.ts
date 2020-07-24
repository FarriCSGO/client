export const Light = {
  colors: {
    // Primary
    primary: "#f37335",

    // Background
    background: "#f0f0f0",
    background2: "#ffffff",

    // Surface
    surface: "#ffffff",
    surface2: "#ffffff",

    // Text
    textLight: "#ffffff",
    textFaint: "#888888",
    textDark: "#0a0a0a"
  },

  size: {
    medium: "only screen and (max-width: 876px) and (min-width: 648px)",
    small: "only screen and (max-width: 647px)"
  }
};

export const Dark = {
  colors: {
    // Primary
    primary: "#f37335",

    // Background
    background: "#121212",
    background2: "#0D0D0D",

    // Surface
    surface: "#1B1B1B",
    surface2: "#202020",

    // Text
    textLight: "#ffffff",
    textFaint: "#888888",
    textDark: "#0a0a0a"
  },

  size: {
    medium: "only screen and (max-width: 876px) and (min-width: 648px)",
    small: "only screen and (max-width: 647px)"
  }
};

export type ThemeType = typeof Light;
