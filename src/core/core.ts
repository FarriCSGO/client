import { App } from "./app";
import { ui } from "./controller/ui";
import { user } from "./controller/user";
import { api } from "./api/index";

export const core = App.Core({
  api,
  ui,
  user
});

export type ICore = typeof core;
