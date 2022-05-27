import React from "react";
import Container from "../../Container";

const ConditionalContainer = ({ condition, children }) =>
  condition ? children : <Container>{children}</Container>;

const BlockD = (props) => {
  return (
    <div className="pt-20 md:pt-32">
      <ConditionalContainer condition={props.diagramFlush}>
        <div className="mb-6">{props.diagram}</div>
      </ConditionalContainer>
      <Container>
        <>
          <div className="md:grid md:grid-cols-2 md:gap-x-12 pt-6" lang="en">
            <h2 className="title-m md:title-l pb-6 max-w-[40rem] break-words">
              {props.title}
            </h2>
            <div className="prose dark:prose-invert md:text-lg">
              {props.children}
            </div>
          </div>
        </>
      </Container>
    </div>
  );
};

export default BlockD;
