import { THEME, THEME_TYPE } from "./ui.state";
import { lightTheme } from "./theme/light.theme";
import { darkTheme } from "./theme/dark.theme";

export const setTheme = (themeName: string) => {
  switch (themeName) {
    case "dark":
      THEME.set(darkTheme);
      THEME_TYPE.set("dark");
      break;

    case "light":
      THEME.set(lightTheme);
      THEME_TYPE.set("light");
      break;

    default:
      THEME.reset();
      THEME_TYPE.reset();
  }
};

export const toggleTheme = () => {
  if (THEME_TYPE.value === "dark") {
    THEME.set(lightTheme);
    THEME_TYPE.set("light");
  } else {
    THEME.set(darkTheme);
    THEME_TYPE.set("dark");
  }
};
