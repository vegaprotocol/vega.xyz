import React from "react";

const ConceptBlock = ({ title, children }) => {
  return (
    <div className="grid grid-cols-12 gap-x-16 border-t border-vega-mid-greyp pt-4 pb-12">
      <div className="col-span-4">
        <div className="title-m">{title}</div>
      </div>
      <div className="col-span-7">{children}</div>
    </div>
  );
};

export default ConceptBlock;
