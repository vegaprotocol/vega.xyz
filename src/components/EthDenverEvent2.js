import React from "react";

const EthDenverEvent2 = ({ title, title2, title3, children, discoMode }) => {
  return (
    <div className="border-b border-white pb-6 mb-6">
      <div className="title-m mb-3 align-bottom">
        {title}
        <br />
        <span className="text-vega-yellow">{title2}</span>
        <br />
        <span className={`${discoMode ? "text-black" : "text-vega-mid-grey"}`}>
          {title3}
        </span>
      </div>

      <div className="copy-xs">{children}</div>
    </div>
  );
};

export default EthDenverEvent2;
