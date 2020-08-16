import api from "../../api/index";
import { IUserSteamDetails } from "./user.interface";
import { STEAM_ID, USER_STEAM_DETAILS } from "./user.state";

export const setSteamID = (steamID: string) => {
  STEAM_ID.set(steamID);
};

export const setUserSteamDetails = async (steamID: string) => {
  const res = await api.steam.GET_USER_STEAM_DETAILS(steamID);
  const name = res.name;
  const level = res.steamLevel;
  const avatarURL = res.avatarImageURL;
  let status: string = "";

  if (res.onlineStatus === 0) {
    status = "Offline";
  }
  if (res.onlineStatus === 1 && res.playingGame) {
    status = res.playingGame;
  }
  if (res.onlineStatus !== 0 && !res.playingGame) {
    status = "Online";
  }

  const data: IUserSteamDetails = {
    name,
    level,
    avatarURL,
    status
  };

  USER_STEAM_DETAILS.set(data);
};
