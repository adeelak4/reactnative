import { useRecoilValue } from "recoil";
import { socketConnected, socketMessage, connect, disconnect } from "../state/socketAtom";

const useSocket = () => {
  const socket = useRecoilValue(socketConnected);
  const msg = useRecoilValue(socketMessage);

  return { connected: socket, msg, disconnect, connect };
};
export default useSocket;
