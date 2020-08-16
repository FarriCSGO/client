export interface IUserSteamDetails {
  steamID?: string;
  name?: string;
  level?: string;
  avatarURL?: string;
  status?: string;
}

export interface IQuickStats {
  steamID?: string;
  winrate?: string;
  kdRatio?: string;
  adr?: string;
  hsRate?: string;
}
