import parseSearchQuery from "./parseSearchQuery";

const showAlert = () => alert("INVALID SEARCH");

const getSteamID64 = async (queryText: string) => {
  const steamID64 = await parseSearchQuery(queryText);

  if (steamID64 === false) showAlert();

  return steamID64;
};

export default getSteamID64;
