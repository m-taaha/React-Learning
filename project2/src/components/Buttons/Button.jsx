import React from "react";

function Button({
  text = "Click me",
  bgColor = "bg-black",
  textColor = "text-white ",
  width = "w-[220px]",
}) {
  return (
    <div>
      <button
        className={`font-semibold rounded-md px-8 py-3 border ${bgColor} ${textColor} ${width} `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
