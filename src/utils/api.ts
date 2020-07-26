// All API Network calls must stay here for modulariy

import Axios from "../utils/Axios";

export const getSteamID = async (profileID: string): Promise<string> => {
  try {
    const response = await Axios.get(`/api/steamID64/${profileID}`);
    const steamID = response.data.steamID64;

    return steamID;
  } catch (error) {
    throw new Error(error);
  }
};

export const validateSteamID = async (steamID64: string) => {
  try {
    const response = await Axios.get(
      `/api/userSteamDetails/profiles/${steamID64}`
    );
    const steamID = response.data.steamID64;
    return steamID;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserSteamDetails = async (steamID: string) => {
  try {
    const response = await Axios.get(
      `/api/userSteamDetails/profiles/${steamID}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
