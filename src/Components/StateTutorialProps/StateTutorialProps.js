import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function StateTutorialProps() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <Login setUsername={setUsername}></Login>
      <User username={username}></User>
    </div>
  );
}

export default StateTutorialProps;
