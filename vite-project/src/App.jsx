import React from "react";
import {useState} from 'react';
import Cards from "./components/CArds";
import Counter from "./Counter";


function App() {

  return (
    <>
      <h1 className="bg-red-300 buttton text-black rounded-xl p-4">Tailwind</h1>
    <Cards username={'Saugat'} btnText={'Click Me'}/>
    <Counter />
    </>
  );

}
export default App
