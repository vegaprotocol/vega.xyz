import React from "react";

const LeadingLine = (props) => {
  return (
    <p
      className={`font-glitched copy-xs md:copy-s ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </p>
  );
};

export default LeadingLine;
