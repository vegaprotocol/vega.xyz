import React from "react";

const Tooltip = ({ children }) => {
  return (
    <span
      className={`border block rounded-sm border-black/20 dark:border-white/20 p-2 relative dark:bg-vega-box-grey bg-white`}
    >
      {children}
    </span>
  );
};

export default Tooltip;
