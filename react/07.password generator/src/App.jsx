import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  // This function will be called multiple times, so how can we optimize it.
  // Hence this function definition should be cached and used.
  const passwordGeneratorFunc = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) str += "1234567890";
    if (isCharactersAllowed) str += "!@#$%&'()*+,-./:;<=>?@";

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(password);

    return password;
  };

  // Only runs if any one of the input changes
  const passwordGenerator = useCallback(passwordGeneratorFunc, [
    passwordLength,
    isNumberAllowed,
    isCharactersAllowed,
    setPassword,
  ]);
  // yaha pe ham optimization ki bat kar rahe he, while in useEffect we want to provided effects for particular state change.

  const copyTextToClipboard = () => {
    inputRef.current?.select();

    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, passwordLength, isNumberAllowed, isCharactersAllowed]);

  return (
    <div className="text-white p-5 flex flex-col gap-7 justify-center items-center">
      <div className="flex justify-center">
        <h1 className="text-white text-4xl py-3 px-5 font-bold">
          Password Generator
        </h1>
      </div>

      <div>
        <input
          className="px-5 py-3 rounded-l-xl outline-none text-2xl text-black"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          ref={inputRef}
        ></input>
        <button
          className="px-5 py-3 rounded-r-xl text-2xl bg-blue-700 text-white font-bold"
          onClick={() => copyTextToClipboard()}
        >
          COPY
        </button>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex gap-4">
          <input
            type="range"
            min={8}
            max={40}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          ></input>
          <label>Length: {passwordLength}</label>
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <label className="">Include Numbers</label>
          <input
            className="p-2"
            type="checkbox"
            checked={isNumberAllowed}
            onChange={(e) => setIsNumberAllowed(e.target.checked)}
          />
        </div>
        <div className="flex gap-2 flex-row-reverse">
          <label className="">Include Characters</label>
          <input
            className="p-2"
            type="checkbox"
            checked={isCharactersAllowed}
            onChange={(e) => setIsCharactersAllowed(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
