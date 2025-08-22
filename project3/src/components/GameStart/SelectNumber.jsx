import React, { useState } from "react";

function SelectNumber({ setError, error, selectNumber, setSelectNumber }) {
  const arrayNumbers = [1, 2, 3, 4, 5, 6];

  const handleError = (value) => {
    setSelectNumber(value);
    setError("");
  };

  return (
    <div className=" flex flex-col gap-3">
      <p className="text-red-600 font-semibold">{error}</p>
      <div className="flex  gap-4">
        {arrayNumbers.map((value, i) => (
          <p
            key={i}
            onClick={() => handleError(value)}
            className={` border-3 w-[72px] h-[72px] flex items-center justify-center text-3xl  ${
              value === selectNumber
                ? "bg-black text-white"
                : "bg-white text-black"
            } `}
          >
            {value}
          </p>
        ))}
      </div>
      <h2 className="ml-80 font-bold text-2xl">Select Numbers</h2>
    </div>
  );
}

export default SelectNumber;
