import { useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const allPages = {
  control: "control",
  remote: "remote",
  video: "video",
};

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    isUserAuth: false,
    currentPage: allPages.remote,
  });

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  const [remoteState, setRemoteState] = useState({
    left: {
      x: 0,
      y: 0,
    },
    right: {
      x: 0,
      y: 0,
    },
    armed: false,
    callibrate: false,
    altiLock: false,
    autoLand: false,
    autoFly: false,
    autoPilot: false,
    demo: false,
    droneConnected: false,
    rcConnected: false,
  });

  return (
    <AppContext.Provider
      value={{
        remoteState: remoteState,
        appState: appState,
        setRemoteState: setRemoteState,
        setAppState: setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
