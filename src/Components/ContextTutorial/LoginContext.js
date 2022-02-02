import React, { useContext } from "react";
import { UserContext } from "./ContextTutorial";
import { ThemeContext } from "./ContextTutorial";

function Login() {
  //{} destructuring
  const { isLoggedIn, setUsername, setIsLoggedIn } = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <div
        style={{
          background: theme === "dark" ? "black" : "papayawhip",
          color: theme === "dark" ? "white" : "palevioletred",
          width: "100%",
          minHeight: "200px",
        }}
      >
        {"The theme here is " + theme}
      </div>
      <label> Login </label>
      <input type="text" onChange={handleChange}></input>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
