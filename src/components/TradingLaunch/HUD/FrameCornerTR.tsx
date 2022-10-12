import React from "react";

const HUDFrameCornerTR = () => {
  return (
    <svg
      width="321"
      height="321"
      viewBox="0 0 321 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M318.24 318.74L318.24 62.5L258.24 2.5L2.00024 2.49999"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameCornerTrBlur)"
      />
      <filter id="hudFrameCornerTrBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
      </filter>
    </svg>
  );
};

export default HUDFrameCornerTR;
