import { api } from "../utils/api";

const API = new api();

const getSteamID64 = async (CUSTOM_ID: string): Promise<string | void> => {
  const steamID64 = API.getSteamID64(CUSTOM_ID);

  return steamID64;
};

// TODO: BRUH YOU GOTTA FIX THIS MESS DOWN BELOW, THERE MUST BE A BETTER WAY!!
const validateQueryGetSteamID = async (
  queryText: string
): Promise<string | boolean> => {
  let CUSTOM_ID: string;
  let STEAM_ID_64: any;

  // Search query that look like "https://steamcommunity.com/id/..."
  if (queryText.includes("steamcommunity.com/id/")) {
    // Try block is used to check that if `queryText` contains "https://"
    // (protocol) or not. Catch block is executed for query like
    // "steamcommunity.com/id/stonecoldman" and try block for query like
    // "https://steamcommunity.com/id/stonecoldman"
    try {
      const parse = new URL(queryText);

      // Validate the protocol, return false if not a valid HTTP protocol.
      if (parse.protocol === "http:" || parse.protocol === "https:") {
        const pathName = parse.pathname;

        // Slice "/id/"
        const slicedPathName = pathName.slice(4);

        // Sometimes the user might enter search query like "/id/stonecoldman/",
        // so we are triming the last "/" otherwise return without trimming
        if (slicedPathName.endsWith("/")) {
          const customID = slicedPathName.slice(0, -1);
          CUSTOM_ID = customID;
          STEAM_ID_64 = getSteamID64(CUSTOM_ID);

          return STEAM_ID_64;
        } else if (slicedPathName.includes("/")) {
          // Errors like "https://steamcommunity.com/id/exampleCustomID/a"
          return false;
        } else {
          const customID = slicedPathName;
          CUSTOM_ID = customID;
          STEAM_ID_64 = getSteamID64(CUSTOM_ID);
          return STEAM_ID_64;
        }
      } else {
        // Invalid HTTP protocol
        return false;
      }
    } catch (error) {
      // Slice "steamcommunity.com/id/"
      const slicedQuery = queryText.slice(22);

      // Sometimes the user might enter search query like "/id/stonecoldman/",
      // so we are triming the last "/" otherwise return without trimming
      if (slicedQuery.endsWith("/")) {
        const customID = slicedQuery.slice(0, -1);
        CUSTOM_ID = customID;
        STEAM_ID_64 = getSteamID64(CUSTOM_ID);
        return STEAM_ID_64;
      } else if (slicedQuery.includes("/")) {
        // Errors like "steamcommunity.com/id/exampleCustomID/a"
        return false;
      } else {
        const customID = slicedQuery;
        CUSTOM_ID = customID;
        STEAM_ID_64 = getSteamID64(CUSTOM_ID);
        return STEAM_ID_64;
      }
    }
  }

  // Search query that look like "https://steamcommunity.com/profiles/..."
  if (queryText.includes("steamcommunity.com/profiles/")) {
    // Try block is used to check that if `queryText` contains "https://"
    // (protocol) or not. Catch block is executed for query like
    // "steamcommunity.com/id/stonecoldman" and try block for query like
    // "https://steamcommunity.com/profiles/71892379812739123..."
    try {
      const parse = new URL(queryText);

      // Validate the protocol, return false if not a valid HTTP protocol.
      if (parse.protocol === "http:" || parse.protocol === "https:") {
        const pathName = parse.pathname;

        // slice "/profiles/"
        const slicedPathName = pathName.slice(10);

        // steamID64 string is of length 17
        if (slicedPathName.length === 17) {
          if (slicedPathName.endsWith("/")) {
            // Sometimes the user might enter search query like "/profiles/712../",
            // so we are triming the last "/" otherwise return without trimming

            STEAM_ID_64 = slicedPathName.slice(0, -1);
            return STEAM_ID_64;
          } else if (slicedPathName.includes("/")) {
            // Errors like "steamcommunity.com/profiles/797123.../.."
            return false;
          } else {
            STEAM_ID_64 = slicedPathName;
            return STEAM_ID_64;
          }
        } else return false; // steamID64 string length is not 17
      }
    } catch (error) {
      // Slice "steamcommunity.com/profiles/"
      const slicedQuery = queryText.slice(28);
      console.log(slicedQuery);

      // Sometimes the user might enter search query like "/profiles/723.../",
      // so we are triming the last "/" otherwise return without trimming

      // steamID64 string is of length 17
      if (slicedQuery.length === 17) {
        if (slicedQuery.endsWith("/")) {
          const STEAM_ID_64 = slicedQuery.slice(0, -1);
          return STEAM_ID_64;
        } else if (slicedQuery.includes("/")) {
          // Errors like "steamcommunity.com/id/exampleCustomID/a"
          return false;
        } else {
          const STEAM_ID_64 = slicedQuery;
          return STEAM_ID_64;
        }
      }
    }
  }

  if (queryText.startsWith("765611") && queryText.length === 17) {
    STEAM_ID_64 = queryText;

    // Validate if the given query is a valid steam id
    const validSteamID = await API.validateSteamID64(STEAM_ID_64);

    if (validSteamID === STEAM_ID_64) {
      return STEAM_ID_64;
    } else {
      return false;
    }
  }

  // The last case can be that the user has entered its CUSTOM_URL that looks
  // like steamcommunity.com/id/{CUSTOM_URL}
  STEAM_ID_64 = getSteamID64(queryText);
  return STEAM_ID_64;
};

export default validateQueryGetSteamID;
