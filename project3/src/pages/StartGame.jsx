import React from "react";

function StartGame({ toggle }) {
  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className="shadow-[-4px_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-center w-[1182px] h-[522px] ">
        <div className="w-[649px] h-[522px]">
          <img src="/public/images/Game-Page/dices1.png" alt="dices" />
        </div>
        <div className="w-[528px] h-[188px]  ">
          <h1 className="font-bold text-8xl">DICE GAME</h1>
          <div className="ml-75 mt-3">
            <button
              onClick={toggle}
              className=" w-[220px] h-[44px]  border font-semibold text-white bg-black rounded-md hover:bg-white hover:text-black duration-200 ease-in-out"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
