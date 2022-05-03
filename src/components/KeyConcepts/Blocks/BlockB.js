import React from "react";

const BlockB = (props) => {
  return (
    <div className="pt-20 md:pt-32">
      <div className="grid grid-cols-2 gap-x-12">
        <div>{props.diagram}</div>
        <div>
          <h2 className="title-m md:title-l pb-6 max-w-[40rem]">
            {props.title}
          </h2>
          <div className="prose">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default BlockB;
