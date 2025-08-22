import React, { useState } from "react";
import Guide from "./Guide";

function RollDice({ resetScore, currentDice, rollDice }) {
  const [showGuide, setShowGuide] = useState(false);

  

  const handleGuide = () => {
    setShowGuide((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <div onClick={rollDice} className="w-[250px] h-[250px]">
          <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p className="font-semibold text-xl">Click on Dice to roll</p>
      </div>
      <div className="flex flex-col mt-6 gap-5">
        <button
          onClick={resetScore}
          className="border w-[220px] h-[44px] font-semibold rounded-md hover:bg-black hover:text-white duration-300 ease-in-out"
        >
          Reset Score
        </button>
        <button
          onClick={handleGuide}
          className="border w-[220px] h-[44px] font-semibold rounded-md hover:bg-black hover:text-white duration-300 ease-in-out"
        >
          {showGuide ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
      {showGuide && <Guide />}
    </div>
  );
}

export default RollDice;
