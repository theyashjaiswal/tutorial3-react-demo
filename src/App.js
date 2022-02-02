import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";
import RefTutorial from "./Components/RefTutorial/RefTutorial";
import StateTutorialProps from "./Components/StateTutorialProps/StateTutorialProps";
import ContextTutorial from "./Components/ContextTutorial/ContextTutorial";
import EffectTutorial from "./Components/EffectTutorial/EffectTutorial";

function App() {
  const [textInput, setTextInput] = useState(() => "default text");
  const handleChange = (e) => {
    console.log(e.target.value);
    setTextInput(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect!!!");
  }, []);

  return (
    <div className="App">
      <div style={{ marginTop: "30px" }}>
        {/* <h1> Parent Component</h1>
        <label> Enter text: </label>
        <input type="text" onChange={handleChange}></input>
        <ChildComponent textInput={textInput}></ChildComponent>
        <Counter></Counter>
        <RefTutorial></RefTutorial> */}
        {/* <StateTutorialProps></StateTutorialProps> */}
        <ContextTutorial></ContextTutorial>
        {/* <EffectTutorial></EffectTutorial> */}
      </div>
    </div>
  );
}

export default App;
