import React from "react";
import MainnetBackground from "../../../images/roadmap/mainnet-background.jpg";

export interface Params {
  className?: string;
}

const V1Mainnet = ({ className }: Params) => {
  return (
    <svg
      width="140"
      height="118"
      viewBox="0 0 140 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <defs>
        <clipPath id="mainnetCircle">
          <ellipse cx="70" cy="61.5" rx="50" ry="50" />
        </clipPath>
      </defs>
      <g className="dark:fill-white fill-black">
        <path d="M9,6H6v3h3V6z" />
        <path d="M12,3V0H9v3v3h3V3z" />
        <path d="M6,9H0v3h6V9z" />
        <path d="M9,12H6v3h3V12z" />
        <path d="M12,15H9v6h3V15z" />
        <path d="M15,12h-3v3h3V12z" />
        <path d="M21,9h-6v3h6V9z" />
        <path d="M15,6h-3v3h3V6z" />
        <path d="M118,115h-3v3h3V115z" />
      </g>
      <image
        width="326"
        height="328"
        xlinkHref={MainnetBackground}
        clipPath="url(#mainnetCircle)"
      />
    </svg>
  );
};
export default V1Mainnet;
