import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Example from "./components/Example";

function App() {
  const [count, setCount] = useLocalStorage({ key: "count" });

  return (
    <>
      <div>
        <h1> Count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <Example />
      </div>
    </>
  );
}

export default App;
