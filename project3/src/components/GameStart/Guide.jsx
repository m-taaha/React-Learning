import React from "react";

function Guide() {
  return (
    <div>
      <div className="w-[794px] h-[208px] border p-4 mt-9 bg-[#FBF1F1] rounded-md shadow-sm">
        <h3 className="font-semibold text-2xl">How to play Games</h3>
        <div className="font-medium mt-8 gap-1 text-[16px] ">
          <p>Select any number</p>
          <p>Click on Dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice if you get wrong guess then 2 points
            will be deducted
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guide;
