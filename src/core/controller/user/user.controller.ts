import { App } from "../../app";
import * as state from "./user.state";
import * as actions from "./user.actions";

const controller = App.Controller({
  state: { ...state },
  actions: { ...actions }
});

export const user = controller as typeof controller & typeof actions;
