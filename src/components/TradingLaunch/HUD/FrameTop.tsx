import React from "react";

const HUDFrameTop = () => {
  return (
    <svg
      width="723"
      height="31"
      viewBox="0 0 723 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block w-full h-auto max-w-[60%] lg:max-w-[45.125rem] mx-auto"
    >
      <path
        d="M0 0.5H97.7L127.7 30.5H361.46"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameTopBlur)"
      />
      <path
        d="M722.92 0.5H625.22L595.22 30.5H361.46"
        stroke="white"
        strokeMiterlimit="10"
        filter="url(#hudFrameTopBlur)"
      />
      <filter id="hudFrameTopBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
      </filter>
    </svg>
  );
};

export default HUDFrameTop;
