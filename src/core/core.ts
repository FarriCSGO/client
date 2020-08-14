import { App } from "./app";
import { ui } from "./controller/ui";

export const core = App.Core({
  ui
});

export type ICore = typeof core;
