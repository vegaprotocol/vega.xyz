import React from "react";

const DiscoModeToggle = ({ discoMode, toggleDiscoMode }) => {
  return (
    <div className="flex items-center cursor-pointer justify-center">
      <div className="mr-3 text-[0.9375rem] tracking-[0.01rem] uppercase">
        Disco Mode
      </div>
      <button className="relative" onClick={toggleDiscoMode}>
        <div
          className={`block w-14 h-8 rounded-full ${
            discoMode ? "bg-black" : "bg-white"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 w-6 h-6 rounded-full transition ${
            discoMode ? "translate-x-full bg-white" : "bg-black"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default DiscoModeToggle;
