import React from "react";
import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  // let counter = 12
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("clicked: ", counter);
  };
  const removeValue = () => {
   if (counter > 0) {
     setCounter(counter - 1);
     console.log("value Removed");
   }
  };
  return (
    <>
      <h1>Saugat</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default Counter;
