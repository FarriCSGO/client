import { THEME, THEME_TYPE } from "./ui.state";
import { lightTheme } from "./theme/light.theme";
import { darkTheme } from "./theme/dark.theme";

export const toggleTheme = () => {
  if (THEME_TYPE.value === "dark") {
    THEME.set(lightTheme);
    THEME_TYPE.set("light");
  } else {
    THEME.set(darkTheme);
    THEME_TYPE.set("dark");
  }
};
