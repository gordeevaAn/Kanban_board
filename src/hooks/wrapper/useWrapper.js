import { WrapperContext } from "./wrapperProvider";
import { useContext } from "react";

export const useWrapper = () => {
  return useContext(WrapperContext);
};
