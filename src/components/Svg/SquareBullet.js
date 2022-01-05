import React from "react";

const SquareBullet = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative -top-px inline-block mr-2"
    >
      <rect width={size} height={size} fill="currentColor" />
    </svg>
  );
};

export default SquareBullet;
