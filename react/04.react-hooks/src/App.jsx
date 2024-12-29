import { useState } from "react";
import UseStateExample from "./components/1. state/UseStateExample";
import UseReducerExample from "./components/1. state/UseReducerExample";
import UseContextExample from "./components/2. context hooks/UseContextExample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1>Use State Example</h1>
        <UseStateExample />
      </section>
      <section>
        <h1>Use Reducer Example</h1>
        <UseReducerExample />
      </section>
      <section>
        <h1>Use Context Example</h1>
        <UseContextExample />
      </section>
    </>
  );
}

export default App;
