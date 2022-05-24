import React from "react";
import Container from "../../Container";

const BlockC = (props) => {
  return (
    <Container>
      <div className="pt-20 md:pt-32 max-w-[46rem] mx-auto">
        <div className="md:flex md:items-end md:justify-between">
          <h2 className="title-m md:title-l mb-6 md:mb-0 md:max-w-[40rem]">
            {props.title}
          </h2>
          <div className="shrink-0 md:w-[15.625rem]">{props.diagram}</div>
        </div>
        <div className="pt-8">
          <div className="prose max-w-none md:text-lg">{props.children}</div>
        </div>
      </div>
    </Container>
  );
};

export default BlockC;
