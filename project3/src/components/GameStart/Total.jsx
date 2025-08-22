import React from "react";

function Total({ score , setScore}) {
  return (
    <div className=" gap-2">
      <h1 className="font-bold text-8xl">{score}</h1>
      <p className="font-semibold text-2xl">Total Score</p>
    </div>
  );
}

export default Total;
