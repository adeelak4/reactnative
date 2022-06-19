import { atom } from "recoil";

import io from "socket.io-client";
import { SERVER_URL, SocketEvent } from "../util/constants";
import { deviceInfoState } from "./deviceAtom";

export const socket = io(SERVER_URL, {
  secure: process.env.NODE_ENV === "production" ? true : false,
  autoConnect: false,
});

export const socketConnected = atom({
  key: "socketConnected", // unique ID (with respect to other atoms/selectors)
  default: false,
  effects: [
    // Works exactly like useEffect, but only runs once when atom is used for the first time.
    async ({ setSelf, getLoadable }) => {
      socket.connect();
      const connected = () => {
        console.log("Socket Connected");
        // getLoadable gets the value of the atom in sync mode.
        socket.emit(SocketEvent.DEVICE_INFO, getLoadable(deviceInfoState).contents);
        setSelf(true);
      };
      const disconnected = () => {
        console.log("Socket Disconnected");
        setSelf(false);
      };
      // Added listeners for socket events.
      socket.on(SocketEvent.CONNECT, connected);
      socket.on(SocketEvent.DISCONNECT, disconnected);
      // Clean up function to run when the atom is cleaned up.
      return () => {
        socket.disconnect();
        socket.off(SocketEvent.CONNECT, connected);
        socket.off(SocketEvent.DISCONNECT, disconnected);
        setSelf(false);
      };
    },
  ],
});

export const socketMessage = atom({
  key: "socketMessage",
  default: null,
  effects: [
    ({ setSelf, getLoadable }) => {
      const connected = getLoadable(socketConnected);
      // setSelf sets the value of the atom, which we can listen to.
      const setMsg = (msg) => {
        console.log("received", msg);
        setSelf(msg);
      };
      if (connected) {
        // When socket receives a message it will call the setMsg function.
        socket.on(SocketEvent.MESSAGE, setMsg);
      }
      return () => socket.off(SocketEvent.MESSAGE, setMsg);
    },
  ],
});

// export const locationState = atom({
//   key: "location",
//   default: null,
//   effects: [
//     ({ onSet }) => {
//       // Excute everytime new value is set, except from setSelf.
//       onSet((location) => {
//         // location is the new value of the state
//         if (socket.connected)
//           // Sending events to socket server when state is changed.
//           socket.emit(SocketEvent.LOCATION, {
//             latitude: location?.coords.latitude,
//             longitude: location?.coords.longitude,
//             bus: location?.bus,
//           });
//       });
//     },
//   ],
// });

export const disconnect = () => socket.disconnect();
export const connect = () => socket.connect();
