import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-2 py-3 rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full shadow-lg font-bold text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg font-bold text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
