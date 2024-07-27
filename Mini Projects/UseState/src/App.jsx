import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(15);
  const addValue = () => {
    setCount(count + 1);
    if (count >= 20) {
      setCount(20);
    }
  };
  const removeValue = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };
  return (
    <>
      <h1>Chai Or React</h1>
      <p>Counter Value : {count}</p>
      <button onClick={addValue}>Add Value : {count}</button>
      <br />
      <button onClick={removeValue}>Decrease Value : {count}</button>
      <p>footer : {count}</p>
    </>
  );
}

export default App;
