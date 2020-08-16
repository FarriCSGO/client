import { API } from "../../API";

export const GET_USER_STEAM_DETAILS = async (steamID: string) => {
  const response = await API.get(`userSteamDetails/profiles/${steamID}`);

  if (response.status !== 200) throw new Error();

  return response.data;
};

export const GET_USER_QUICK_STATS = async (steamID: string) => {
  const response = await API.get(`quickStats/${steamID}`);

  if (response.status !== 200) throw new Error();

  return response.data;
};
