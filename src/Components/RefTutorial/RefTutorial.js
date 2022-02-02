import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>FOCUS ON CLICK</button>
      <button onClick={() => (inputRef.current.value = "")}>
        Submit & Clear
      </button>
    </div>
  );
}

export default RefTutorial;
