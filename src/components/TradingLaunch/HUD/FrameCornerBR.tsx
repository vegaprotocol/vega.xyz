import React from "react";

const HUDFrameCornerBR = () => {
  return (
    <svg
      width="321"
      height="321"
      viewBox="0 0 321 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00024 318.24L258.24 318.24L318.24 258.24L318.24 2.00024"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameCornerBrBlur)"
      />
      <filter id="hudFrameCornerBrBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
      </filter>
    </svg>
  );
};

export default HUDFrameCornerBR;
