// All API Network calls must stay here for modulariy

import Axios from "../utils/Axios";

export class api {
  getSteamID64 = async (profileID: string) => {
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
      console.log("VALIDATING...", steamID);
      return steamID;
    } catch (error) {
      throw new Error(error);
    }
  };
}
