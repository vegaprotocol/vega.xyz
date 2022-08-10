import React from "react";

const NavigationHeading = (props) => {
  return (
    <div className="text-vega-mid-grey uppercase mb-1 text-[0.9375rem]">
      {props.children}
    </div>
  );
};

export default NavigationHeading;
