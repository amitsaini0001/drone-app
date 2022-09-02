import React from "react";
import "./styles.css";
import { useAppContext, allPages } from "../../Context/AppContext";

function Container({ children }) {
  const appState = useAppContext().appState;
  const setAppState = useAppContext().setAppState;

  function menuHandler(page) {
    if (page == allPages.control) {
      setAppState({ ...appState, currentPage: allPages.control });
    }
    if (page == allPages.remote) {
      setAppState({ ...appState, currentPage: allPages.remote });
    }
    if (page == allPages.video) {
      setAppState({ ...appState, currentPage: allPages.video });
    }
    return;
  }

  return (
    <div className="main-wrapper">
      <div className="topbar">
        <div className="buttons-left">
          <a
            className={`buttons ${
              appState.currentPage === allPages.remote ? "btn-selected" : ""
            }`}
            onClick={(e) => menuHandler(allPages.remote)}
          >
            Remote
          </a>
          <a
            className={`buttons ${
              appState.currentPage === allPages.control ? "btn-selected" : ""
            }`}
            onClick={(e) => menuHandler(allPages.control)}
          >
            Controls
          </a>
        </div>
        <div className="buttons-right"></div>
      </div>
      <div className="content">{children}</div>
      <div className="bottom-bar">
        <span>🟠 connecting ...</span>
      </div>
    </div>
  );
}

export { Container };
