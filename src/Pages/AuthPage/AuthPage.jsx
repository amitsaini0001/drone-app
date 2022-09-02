import React, { useRef } from "react";

import "./styles.css";

const CODE = "Amitsaini";

const AuthPage = (props) => {
  const inputRef = useRef(null);

  const checkAuth = () => {
    if (inputRef.current.value) {
      if (inputRef.current.value === CODE) {
        localStorage.setItem("isAuth", "true");
        window.location.reload(false);
      }
    }
  };

  return (
    <div className="main">
      <div className="login-form">
        <h3> Login here</h3>
        <input ref={inputRef} className="input"></input>
        <button className="submit" onClick={checkAuth}>
          Login
        </button>
      </div>
    </div>
  );
};

export { AuthPage };
