import axios from "axios";

let BASE_URL: string;

process.env.NODE_ENV === "production"
  ? (BASE_URL = "https://farri-server.herokuapp.com")
  : (BASE_URL = "http://localhost:6969");

const Axios = axios.create({
  baseURL: BASE_URL
});

export default Axios;
