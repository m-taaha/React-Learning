import React from "react";
import Total from "../components/GameStart/Total";
import SelectNumber from "../components/GameStart/SelectNumber";
import RollDice from "../components/GameStart/RollDice";
import { useState } from "react";

function GameStarted() {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();

  function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("Random Number :", randomNumber);
    return randomNumber;
  }

  const rollDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = getRandomInt(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <div className=" flex items-center justify-center  flex-col ">
        <div className="w-[1280px] h-[151px] flex justify-between items-center mt-20">
          <Total score={score} setScore={setScore} />
          <SelectNumber
            setError={setError}
            error={error}
            selectNumber={selectNumber}
            setSelectNumber={setSelectNumber}
          />
        </div>
        <div className="flex justify-center items-center mt-18  w-[250px] h-[449px] ">
          <RollDice
            resetScore={resetScore}
            score={score}
            currentDice={currentDice}
            rollDice={rollDice}
          />
        </div>
      </div>
    </div>
  );
}

export default GameStarted;
