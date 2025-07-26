import React, { useState } from "react";
import Button from "./Buttons/Button";

function Hero() {
  const [val, setVal] = useState({ name: "", email: "", text: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val);
    setVal({ name: "", email: "", text: "" });
  };

  const handleValue = (event) => {
    const { name, value } = event.target;
    setVal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex">
      <div className="ml-44">
        <form onSubmit={handleSubmit}>
          <div className="mt-9 flex gap-8 ">
            <Button text="Via Support Chat" />
            <Button text="Via Call" />
          </div>
          <div className="mt-1.5  ">
            <Button
              bgColor="bg-transparent"
              textColor="text-black"
              text="Via Call Support"
              width="w-[472px]"
            />
          </div>
          <div className=" ml-5">
            <div className="relative">
              <label htmlFor="name" className=" absolute ml-4 -mt-3 bg-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={val.name}
                onChange={handleValue}
                className="mt-8 block border border-gray-400 rounded-md px-4 py-2 w-[440px]"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className=" absolute ml-4 -mt-3 bg-white">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={val.email}
                onChange={handleValue}
                className="mt-5 block border border-gray-400 rounded-md px-4 py-2 w-[440px]"
              />
            </div>

            <div className="relative">
              <label htmlFor="text" className=" absolute ml-4 -mt-3 bg-white">
                Text
              </label>
              <textarea
                type="text"
                name="text"
                value={val.text}
                onChange={handleValue}
                className="mt-5 block border border-gray-400 rounded-md px-4 py-2 w-[440px] h-53 resize-none"
              />
            </div>
            <div className="mt-2 ml-55">
              <Button text="Submit" />
            </div>
          </div>
        </form>
      </div>

      <div>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
