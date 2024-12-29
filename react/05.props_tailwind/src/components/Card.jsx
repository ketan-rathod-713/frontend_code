import React from "react";

const Card = ({ name = "Visit me" }) => {
  return (
    <div className="bg-green-500">
      <h1 className="font-bold text-4xl opacity-50 bg-blue-400 text-white p-2">
        {name}
      </h1>
      <div>Hello my name is {name}, Welcome to my card.</div>
    </div>
  );
};

export default Card;
