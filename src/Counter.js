import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    } else {
      alert("Cannot decrement further!!!!");
    }
  };
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3> Third Component: Counter</h3>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
