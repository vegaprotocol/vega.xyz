import React from "react";

const Tooltip = ({ children }) => {
  return (
    <div
      className={`border rounded-sm border-black/20 dark:border-white/20 p-2 relative dark:bg-vega-box-grey bg-white`}
    >
      {children}
    </div>
  );
};

export default Tooltip;
