import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProviver = (props) => {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProviver;
