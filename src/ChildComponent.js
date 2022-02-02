import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h4>Child Component</h4>
      <p>{props.textInput}</p>
    </div>
  );
}

export default ChildComponent;
