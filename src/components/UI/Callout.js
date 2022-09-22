import React from "react";

const Callout = ({ children, className }) => {
  return (
    <div
      className={`border dark:border-white/20 p-6 border-black rounded-xl dark:bg-vega-box-grey bg-white ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Callout;
