const REALTIME_SERVER = "https://gps-sender-backend.herokuapp.com";
const REALTIME_SERVER_DEVELOPMENT = "http://localhost:8000";

// export const SERVER_URL = process.env.NODE_ENV === "production" ? REALTIME_SERVER : REALTIME_SERVER_DEVELOPMENT;
export const SERVER_URL = REALTIME_SERVER;

export const SocketEvent = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  MESSAGE: "message",
  LOCATION: "location",
  DEVICE_INFO: "device-info",
  BUS_LOCATION: "busLocation",
};

Object.freeze(SocketEvent);
