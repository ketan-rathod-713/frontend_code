import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// createRoot allows us to render a jsx into the html component.
// FROM WHERE render method is coming here ??

const AnotherElement = ()=> (
    <a href="https://google.com" target="_blank">Visit google</a>
)

// It servers as an alternative to writting JSX in the react
// IN this step we can directly specify the props we want and react will render accordingly.
const ReactElementWithCustomProperties = ()=>  React.createElement(
    "a",
    { href: "https://google.com", target: "_blank", value: "Hi" },
    "Visit google",
    React.createElement("a", { href: "https://google.com", target: "_blank"}, "Child Link")
);

createRoot(document.getElementById("root")).render(
    // <AnotherElement/>

    // This should always be a function which is returning JSX or either a React.createElement
    // <ReactElementWithCustomProperties/>

    // Behind the scenes -> converted same as the customRender function
    <App/>
);
