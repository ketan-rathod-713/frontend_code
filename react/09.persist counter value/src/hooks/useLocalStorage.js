import React, { useEffect, useState } from "react";

const useLocalStorage = ({ key }) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key) || null)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
