import { api } from "../../api/index";
import { IUserSteamDetails, IQuickStats } from "./user.interface";
import { STEAM_ID, USER_STEAM_DETAILS, USER_QUICK_STATS } from "./user.state";

export const setSteamID = (steamID: string) => {
  STEAM_ID.set(steamID);
};

export const setUserSteamDetails = async (steamID: string) => {
  try {
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
      steamID,
      name,
      level,
      avatarURL,
      status
    };

    USER_STEAM_DETAILS.set(data);
  } catch (err) {}
};

export const setUserQuickStats = async (steamID: string) => {
  try {
    const res = await api.steam.GET_USER_QUICK_STATS(steamID);

    const winrate = res.winrate.toFixed(2);
    const kdRatio = res.kdRatio.toFixed(2);
    const adr = res.adr.toFixed(2);
    const hsRate = res.hsRate.toFixed(2);

    const data: IQuickStats = {
      steamID,
      winrate,
      kdRatio,
      adr,
      hsRate
    };

    USER_QUICK_STATS.set(data);
  } catch (err) {}
};
