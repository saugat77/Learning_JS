import React from "react";
import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  // let counter = 12
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("clicked: ", counter);
    }
    else{
        alert('cant add more than 20');
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("value Removed");
    }
    else{
        alert('cant go to negative ')
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
