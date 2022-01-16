import React from "react";

const InsaneModeToggle = ({ insaneMode, toggleInsaneMode }) => {
  return (
    <div className="flex items-center justify-center">
      <label
        for="insaneModeToggle"
        className="flex items-center cursor-pointer"
      >
        <div className="mr-3 text-[0.9375rem] tracking-[0.01rem] uppercase">
          Crazy Mode
        </div>
        <div className="relative" onClick={toggleInsaneMode}>
          <div
            className={`block w-14 h-8 rounded-full ${
              insaneMode ? "bg-black" : "bg-white"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 w-6 h-6 rounded-full transition ${
              insaneMode ? "translate-x-full bg-white" : "bg-black"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default InsaneModeToggle;
