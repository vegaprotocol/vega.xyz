import React from "react";

const BoxTitle = ({ text }) => {
  return (
    <div className="text-[0.9375rem] tracking-[0.01em] inline-block px-1.5 py-1 leading-none border border-black dark:border-white uppercase">
      {text}
    </div>
  );
};

export default BoxTitle;
