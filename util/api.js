import axios from "axios";
import { SERVER_URL } from "./constants";
import storage from "@react-native-async-storage/async-storage";

let api = axios.create({
  baseURL: SERVER_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = await storage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { storage };
export default api;