import React, { useContext } from "react";
import { UserContext } from "./ContextTutorial";

function User() {
  //{} destructuring
  const { username, isLoggedIn } = useContext(UserContext);

  return <div>{isLoggedIn ? <h1>User: {username}</h1> : ""}</div>;
}

export default User;
