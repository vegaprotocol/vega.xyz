import React from "react";

const BlockA = (props) => {
  return (
    <div className="pt-20 md:pt-32">
      <div className="border-b border-black dark:border-white">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="title-m md:title-l pb-6 max-w-[40rem]">
            {props.title}
          </h2>
          <div className="shrink-0 w-[15.625rem]">{props.diagram}</div>
        </div>
      </div>
      <div className="md:columns-2 md:gap-x-12 pt-6">
        <div className="prose">{props.children}</div>
      </div>
    </div>
  );
};

export default BlockA;
