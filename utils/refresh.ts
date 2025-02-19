import { Refresh } from "@/definition";

export const refresh = ({setRefreshing, toggleClear, setIsOpenFilter}: Refresh) => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
    toggleClear();
    setIsOpenFilter(false);
  }, 1000);
};
