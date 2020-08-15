import { STEAM_ID } from "./user.state";

export const setSteamID = (steamID: string) => {
  STEAM_ID.set(steamID);
};
