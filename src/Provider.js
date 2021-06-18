import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [subMenuState, setsubMenuState] = useState(false);
  const [sideBar, setsideBar] = useState(false);
  const [link, setlink] = useState("");
  const [center, setcenter] = useState("");

  const openSubMenu = () => {
    setsubMenuState(true);
  };
  const closeSubMenu = () => {
    setsubMenuState(false);
  };
  const opensideBar = () => {
    setsideBar(true);
  };
  const closesideBar = () => {
    setsideBar(false);
  };
  const displaySideBar = (e) => {
    const link = e.target.textContent;
    setlink(link);
    const measurement = e.target.getBoundingClientRect();
    const center = (measurement.right + measurement.left) / 2 - 60;
    setcenter(center);
    openSubMenu();
  };

  return (
    <AppContext.Provider
      value={{
        subMenuState,
        openSubMenu,
        closeSubMenu,
        opensideBar,
        closesideBar,
        sideBar,
        displaySideBar,
        link,
        center,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext, AppContext };
