import React, { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocalStorage } from "react-use";
export const GlobalContext = createContext(() => null);

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [instructor, setInstructor] = useLocalStorage("instructor", false);
  const [user, setUser] = useLocalStorage("user", {});
  const mobile = useMediaQuery({
    maxWidth: "600px",
  });
  const state = {
    isLoggedIn,
    setIsLoggedIn,
    instructor,
    setInstructor,
    user,
    setUser,
    mobile,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
