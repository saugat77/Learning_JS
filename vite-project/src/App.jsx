import React, { useEffect } from "react";
import { useState, useCallback,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
const passwordRef = useRef(null);

const copyPassword = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},
[password]) 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isChar) str += '+_(-)*&^%{}[]$#@!?';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isChar, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full max-w-md mx-auto rounded-e-lg my-8 px-4 py-4 text-orange-400 bg-gray-800">
        <div className="row flex shadow rounded-lg">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password"
            ref={passwordRef}
            value={password}
            readOnly
          />
          <button
          onClick={copyPassword} className="outline-none bg-green-700 px-4 rounded-lg text-white">
            Copy
          </button>
        </div>

        <div className="row conditionField m-2 flex-sm gap-x-1">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isNumber}
                onChange={() => setIsNumber((prev) => !prev)}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isChar}
                onChange={() => setIsChar((prev) => !prev)}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
