import React, { useState, createContext } from "react";
import Login from "./LoginContext";
import User from "./UserContext";

//context can be said to a collection of states
export const UserContext = createContext(null);
export const ThemeContext = createContext("dark");

function ContextTutorial() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/*values will be all states and functions we want to pass in*/}
      <UserContext.Provider
        value={{ username, setUsername, isLoggedIn, setIsLoggedIn }}
      >
        <ThemeContext.Provider value={"light"}>
          <Login></Login>
          <User></User>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContextTutorial;
