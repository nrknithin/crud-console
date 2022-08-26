import { createContext } from "react";

export const AppContext = createContext();

/*=============
 * AppContextProvider.
 *
 * @context
=============*/

export const AppContextProvider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
