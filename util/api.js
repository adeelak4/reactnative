import axios from "axios";
import { SERVER_URL } from "./constants";

let api = axios.create({
  baseURL: SERVER_URL,
});

export default api;
