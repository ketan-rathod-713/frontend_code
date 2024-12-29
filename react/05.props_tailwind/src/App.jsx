import { useState } from "react";
import "./index.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  // This function is doing batch renders
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // This function is not doing batch renders, because we are telling setCount to conisder the current state first and based on that do the UI changes.
  const handleClick2 = () => {
    setCount((currentState) => currentState + 1);
    setCount((currentState) => currentState + 1);
    setCount((currentState) => currentState + 1);
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Hello world!</h1>

      <div>
        <Card name="ketan rathod" />
        <Card name="aman shukla" />
      </div>

      <div>
        <button
          className="text-2xl bg-red-400 p-2 text-white rounded-sm m-2"
          onClick={() => handleClick2()}
        >
          Click me {count} times
        </button>
        <p>You have clicked the button {count} times.</p>
      </div>
    </>
  );
}

export default App;
