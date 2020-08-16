import { App } from "../../app";
import { IUserSteamDetails } from "./user.interface";

const defaultState: IUserSteamDetails = {
  name: "",
  level: "",
  avatarURL: "",
  status: ""
};

export const STEAM_ID = App.State<string>("");
export const USER_STEAM_DETAILS = App.State<IUserSteamDetails>(defaultState);
