import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const data = useCurrencyInfo("USD");

  return (
    <>
      <h1 className="text-3xl font-bold text-center px-5 py-3">
        Currency Converter
      </h1>
    </>
  );
}

export default App;
