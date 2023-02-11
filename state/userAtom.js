import { atom } from "recoil";
import { SocketEvent } from "../util/constants";
import api, { storage } from "./../util/api";
import { socket } from "./socketAtom";

const userState = atom({
  key: "busState",
  default: {
    token: "",
    user: {},
  },
  effects: [
    async ({ setSelf }) => {
      const token = await storage.getItem("token");
      if (token) {
        setSelf((state) => ({
          ...state,
          token,
        }));
      }
    },
    async ({ setSelf, onSet }) => {
      onSet(async (newValue, oldValue) => {
        await storage.setItem("token", newValue.token);
        if (newValue.token !== oldValue.token) {
          const res = await api.get("/api/v1/user");
          if (res.data?.email) {
            setSelf({ token: newValue.token, user: res.data });
          } else {
            setSelf({
              token: "",
              user: {},
            });
          }
        }
      });
    },
  ],
});

export { userState };
