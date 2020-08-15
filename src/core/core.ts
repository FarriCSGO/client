import { App } from "./app";
import { ui } from "./controller/ui";
import { user } from "./controller/user";

export const core = App.Core({
  ui,
  user
});

export type ICore = typeof core;
