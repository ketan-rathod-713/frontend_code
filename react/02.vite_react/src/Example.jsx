import { useState } from "react";

function ExampleHooks() {

  // Now state and the ui will be changes whenever this value changes by setCounter function
  // setCounter is a reference to the internal react function which is responsible for the UI updation.
  const [counter, setCounter] = useState(10)
  
  // let counter = 0;

  // function addValue(value) {
  //   counter += value;
  // }

  function addValue(value) {

    // write a callback function inside it -> that will 
    setCounter(counter + value)
  }

  return <div>
    <h1>Value : {counter}</h1>
    <button onClick={()=> addValue(1)}>Add Value</button>
  </div>;
}

export default ExampleHooks;
