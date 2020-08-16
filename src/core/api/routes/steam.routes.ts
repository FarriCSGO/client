import { API } from "../../api";

export const GET_USER_STEAM_DETAILS = async (steamID: string) => {
  try {
    const response = await API.get(`userSteamDetails/profiles/${steamID}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
