// All API Network calls must stay here for modulariy

import Axios from "../utils/Axios";

class api {
  getSteamID64 = async (profileID: string): Promise<string> => {
    try {
      const response = await Axios.get(`/api/steamID64/${profileID}`);
      const steamID64 = response.data.steamID64;

      return steamID64;
    } catch (error) {
      throw new Error(error);
    }
  };

  validateSteamID64 = async (steamID64: string) => {
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

  getUserSteamDetails = async (steamID64: string) => {
    try {
      const response = await Axios.get(
        `/api/userSteamDetails/profiles/${steamID64}`
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new api();
