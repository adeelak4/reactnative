import { useRecoilValue, useSetRecoilState } from "recoil";
import { busState } from "../state/busAtom";

const useBus = () => {
  const state = useRecoilValue(busState);
  const setState = useSetRecoilState(busState);

  const selectBus = (id) => {
    setState((prev) => ({
      ...prev,
      selectedId: id,
    }));
  };

  return { busses: state.busses, selected: state.selectedId, selectBus };
};

export default useBus;
