import { useRecoilValue, useSetRecoilState } from "recoil";
import { busState } from "../state/busAtom";

const useBus = () => {
  const state = useRecoilValue(busState);
  const setState = useSetRecoilState(busState);
console.log("asking  buss", state);
  const selectBus = (id) => {
    setState((prev) => ({
      ...prev,
      selectedId: id,
    }));
  };

  return {
    busses: state.busses,
    selected: state.selectedId,
    selectedName: state.busses?.find((item) => item.id === state.selectedId)?.name,
    selectBus,
    location: state?.busses?.find((item) => item.id === state.selectedId)?.location,
  };
};

export default useBus;
