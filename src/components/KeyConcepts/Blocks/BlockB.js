import React from "react";

const BlockB = (props) => {
  return (
    <div className="pt-20 md:pt-32">
      <div className="grid md:grid-cols-2 gap-x-12 items-center">
        <div
          className={`mx-auto w-full max-w-[18rem] md:max-w-none mb-12 ${
            props.diagramPosition === "right" ? "md:order-2" : "md:order-1"
          }`}
        >
          {props.diagram}
        </div>
        <div
          className={`${
            props.diagramPosition === "right" ? "md:order-1" : "md:order-2"
          }`}
        >
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
