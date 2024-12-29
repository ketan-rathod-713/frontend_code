import { useContext, useRef, useState } from "react";
import ThemeContext from "./context";
import UseStateExample from "../1. state/UseStateExample";

function UseContextExample() {
  // manage the state of the theme
  const [theme, setTheme] = useState({
    primaryColor: "red",
    secondaryColor: "white",
    dangerColor: "blue",
  });

  //   ref to maintain the state of the primary color in theme
  const primaryColorInputRef = useRef(null);

  function changePrimaryColor() {
    const color = primaryColorInputRef.current.value;

    console.log("changing primary color: " + color);

    setTheme({ ...theme, primaryColor: color });
  }

  //   manage state in normal way -> context will only help us to by pass the props. it will not automatically manage any kind of state.

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Primary Color"
          ref={primaryColorInputRef}
        />
        <button onClick={changePrimaryColor}>Change Primary Color</button>
      </div>

      <ThemeContext.Provider value={theme}>
        {/* we are not passing props, still it will work because of the Context */}
        <ComponentA />
        <ComponentA />
      </ThemeContext.Provider>
    </div>
  );
}

function ComponentA() {
  const themeValue = useContext(ThemeContext);

  return (
    <>
      <h4>Current Theme Values</h4>
      <div>Primary Color: {themeValue.primaryColor}</div>
      <div>Secondary Color: {themeValue.secondaryColor}</div>
      <div>Danger Color: {themeValue.dangerColor}</div>
    </>
  );
}

export default UseContextExample;
