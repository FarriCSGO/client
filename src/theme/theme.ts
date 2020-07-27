export const Light = {
  name: "Light",

  colors: {
    // Primary
    primary: "#f37335",
    onPrimary: "#ffffff",
    onPrimary2: "#0a0a0a",

    // Background
    background: "#f0f0f0",
    background2: "#ffffff",
    onBackground: "#0a0a0a",

    // Surface
    surface: "#ffffff",
    surface2: "#ffffff",
    onSurface: "#0a0a0a",
    hoverSurface: "#eaeaea",

    // Text
    text: "#0a0a0a",
    textFaint: "#888888"
  },

  size: {
    medium: "only screen and (max-width: 876px) and (min-width: 768px)",
    small: "only screen and (max-width: 767px)"
  }
};

export const Dark = {
  name: "Dark",

  colors: {
    // Primary
    primary: "#f37335",
    onPrimary: "#ffffff",
    onPrimary2: "#0a0a0a",

    // Background
    background: "#121212",
    background2: "#0D0D0D",
    onBackground: "#ffffff",

    // Surface
    surface: "#1B1B1B",
    surface2: "#202020",
    onSurface: "#ffffff",
    hoverSurface: "#0D0D0D",

    // Text
    text: "#ffffff",
    textFaint: "#888888"
  },

  size: {
    medium: "only screen and (max-width: 876px) and (min-width: 768px)",
    small: "only screen and (max-width: 767px)"
  }
};

export type ThemeType = typeof Light;
