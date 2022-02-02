import React, { useState } from "react";

function Login(props) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const usernameregex = /^[a-zA-Z]+$/;
  const handleChange = (e) => {
    if (!usernameregex.test(e.target.value) && e.target.value) {
      setError(true);
      setErrorMessage("Invalid Username!! Only alphabets are allowed!");
    } else {
      setError(false);
      setErrorMessage("");
      props.setUsername(e.target.value);
    }
  };
  return (
    <div>
      <label> Login </label>
      <input type="text" onChange={handleChange}></input>
      {error ? <p style={{ color: "red" }}>{errorMessage}</p> : ""}
    </div>
  );
}

export default Login;
