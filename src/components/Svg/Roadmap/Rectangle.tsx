import React from "react";

const Rectangle = (props) => {
  return (
    <svg
      {...props}
      width="7"
      height="7"
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7" height="7" className="dark:fill-white fill-black" />
    </svg>
  );
};

export default Rectangle;
