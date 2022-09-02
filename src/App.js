import "./App.css";
import { useAppContext, allPages } from "./Context/AppContext";
import { AuthPage, ControlPage, RemotePage } from "./Pages";
import { Container } from "./Components";
import { useEffect } from "react";

function App() {
  const appState = useAppContext().appState;
  const isAuth = localStorage.getItem("isAuth");

  if (!isAuth || isAuth === "false") {
    return <AuthPage />;
  }
  return (
    <Container>
      {appState.currentPage === allPages.control && <ControlPage />}
      {appState.currentPage === allPages.remote && <RemotePage />}
    </Container>
  );
}

export default App;
