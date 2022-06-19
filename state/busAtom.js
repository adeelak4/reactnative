import { atom } from "recoil";
import { SocketEvent } from "../util/constants";
import api from "./../util/api";
import { socket } from "./socketAtom";

const busState = atom({
  key: "busState",
  default: {
    selectedId: "",
    busses: [],
  },
  effects: [
    async ({ setSelf }) => {
      let res = await api.get("/api/v1/bus");
      setSelf((state) => ({
        ...state,
        busses: res.data.data,
      }));
    },
    async ({ setSelf }) => {
      socket.on(SocketEvent.BUS_LOCATION, (data) => {
        setSelf((obj) => {
          let busses = obj.busses.map((item) => {
            if (item.id === data.bus) {
              return { ...item, location: data };
            } else return item;
          });
          return { ...obj, busses };
        });
      });
    },
  ],
});

export { busState };
