import React from "react";

const Arrow = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M10 18L10 0L8 -8.74228e-08L8 18L10 18Z" />
        <path d="M8 16L8 14L6 14L6 16L8 16Z" />
        <path d="M12 16L12 14L10 14L10 16L12 16Z" />
        <path d="M14 14L14 12L12 12L12 14L14 14Z" />
        <path d="M6 14L6 12L4 12L4 14L6 14Z" />
        <path d="M4 12L4 10L2 10L2 12L4 12Z" />
        <path d="M16 12L16 10L14 10L14 12L16 12Z" />
        <path d="M18 10L18 8L16 8L16 10L18 10Z" />
        <path d="M2 10L2 8L0 8L-8.74228e-08 10L2 10Z" />
      </g>
    </svg>
  );
};

export default Arrow;
