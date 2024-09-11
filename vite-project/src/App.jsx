import React from "react";
import {useState} from 'react';



function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {

  }
  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div>

      </div>
    </>
  );

}
export default App
