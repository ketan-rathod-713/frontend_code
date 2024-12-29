import { useState } from "react";

function UseStateExample() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h3>Counter : {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}

export default UseStateExample;
