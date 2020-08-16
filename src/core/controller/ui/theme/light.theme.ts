import { ITheme, IColor, IScreen } from "../ui.interface";

const name: string = "light";

const color: IColor = {
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
};

const screen: IScreen = {
  medium: "only screen and (max-width: 876px) and (min-width: 768px)",
  small: "only screen and (max-width: 767px)"
};

export const lightTheme: ITheme = {
  name,
  color,
  screen
};
