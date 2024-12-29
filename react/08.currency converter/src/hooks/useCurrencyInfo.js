import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (currency) => {
  // whenever a component gets mounted then do this API call
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data["rates"]);
      }); // How to return this data // wrap it in state and return that state
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
