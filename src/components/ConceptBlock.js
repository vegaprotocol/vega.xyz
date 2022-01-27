import React from "react";

const ConceptBlock = ({ title, children }) => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-x-16 border-t border-vega-mid-greyp pt-4 pb-12">
      <div className="md:col-span-4">
        <div className="title-m mb-4">{title}</div>
      </div>
      <div className="md:col-span-7">{children}</div>
    </div>
  );
};

export default ConceptBlock;
