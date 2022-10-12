import React from "react";

const HUDFrameCornerBL = () => {
  return (
    <svg
      width="321"
      height="321"
      viewBox="0 0 321 321"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.50004 2.00024L2.50001 258.24L62.5 318.24L318.74 318.24"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameCornerBlBlur)"
      />
      <filter id="hudFrameCornerBlBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
      </filter>
    </svg>
  );
};

export default HUDFrameCornerBL;
