import "./styles.css";
import React, { useState } from "react";

// useState - hook, function

export default function App() {
  console.log("renderized");

  // useState( initialState ) => array [value, function to change]
  const [counter, setCounter] = useState(10);
  console.log(counter);

  // Logic
  const add = () => {
    console.log("add");
    return setCounter(counter + 1);
  };

  const subtract = () => {
    console.log("subtract");
    return setCounter(counter - 1);
  };

  const handleAdd = () => {
    add(setCounter);
  };

  const handleSubtract = () => {
    subtract(setCounter);
  };

  // Render
  return (
    <div className="App">
      <h2>My Amazing Counter</h2>
      <div>
        <button onClick={handleSubtract}> - </button>
        <span> {counter} </span>
        <button onClick={handleAdd}> + </button>
      </div>
    </div>
  );
}
