import { createContext } from "react";

const ThemeContext = createContext({
  primaryColor: "black",
  secondaryColor: "blue",
  dangerColor: "red",
});

export default ThemeContext;
