import { App } from "../../app";
import { darkTheme } from "./theme/dark.theme";
import { ITheme } from "./ui.interface";

export const THEME = App.State<ITheme>(darkTheme).persist("THEME");
export const THEME_TYPE = App.State<string>("dark").persist("THEME_TYPE");
