import { App } from "./app";

let BASE_URL: string;

process.env.NODE_ENV === "production"
  ? (BASE_URL = "https://farri-server.herokuapp.com")
  : (BASE_URL = "http://localhost:6969");

export const API = App.API({
  options: {},
  baseURL: BASE_URL
});
