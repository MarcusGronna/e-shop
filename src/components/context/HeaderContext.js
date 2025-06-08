import { createContext } from "react";

export const HeaderContext = createContext({
  forceTop: false,
  setForceTop: () => {},
});
