import { App } from "../../app";
import { IUserSteamDetails, IQuickStats } from "./user.interface";

export const STEAM_ID = App.State<string>("");
export const USER_STEAM_DETAILS = App.State<IUserSteamDetails>({});
export const USER_QUICK_STATS = App.State<IQuickStats>({});
