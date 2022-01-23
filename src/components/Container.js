import React from "react";

const Container = (props) => {
  return (
    <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[90rem] mx-auto">
      {props.children}
    </div>
  );
};

export default Container;
