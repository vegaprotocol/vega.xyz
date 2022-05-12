import React from "react";

const BlockD = (props) => {
  return (
    <div className="pt-20 md:pt-32">
      <div className="mb-6">{props.diagram}</div>
      <div className="md:grid md:grid-cols-2 md:gap-x-12 pt-6" lang="en">
        <h2 className="title-m md:title-l pb-6 max-w-[40rem] hyphens-auto overflow-hidden">
          {props.title}
        </h2>
        <div className="prose">{props.children}</div>
      </div>
    </div>
  );
};

export default BlockD;
