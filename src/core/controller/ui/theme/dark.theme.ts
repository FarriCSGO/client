import { ITheme, IColor, IScreen } from "../ui.interface";

const name: string = "dark";

const color: IColor = {
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
};

const screen: IScreen = {
  medium: "only screen and (max-width: 876px) and (min-width: 768px)",
  small: "only screen and (max-width: 767px)"
};

export const darkTheme: ITheme = {
  name,
  color,
  screen
};
