import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

const Example = () => {
  const [user, setUser] = useLocalStorage({ key: "user" });
  const [name, setName] = useState(user.name || "");

  console.log(user);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setUser({ name: name })}>Change User</button>
    </div>
  );
};

export default Example;
