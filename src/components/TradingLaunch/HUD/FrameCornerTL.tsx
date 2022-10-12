import React from "react";

const HUDFrameCornerTL = () => {
  return (
    <svg
      width="321"
      height="321"
      viewBox="0 0 321 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M318.74 2.5H62.5L2.5 62.5V318.74"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameCornerTlBlur)"
      />
      <filter id="hudFrameCornerTlBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
      </filter>
    </svg>
  );
};

export default HUDFrameCornerTL;
