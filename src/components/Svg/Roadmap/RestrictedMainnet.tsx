import React from "react";
import RestrictedMainnetBackground from "../../../images/roadmap/restricted-mainnet-background.jpg";

export interface Params {
  className?: string;
}

const RestrictedMainnet = ({ className }: Params) => {
  return (
    <svg
      width="118"
      height="101"
      viewBox="0 0 118 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <clipPath id="restrictedMainnetCircle">
        <ellipse cx="59" cy="50.5" rx="50" ry="50.5" />
      </clipPath>
      <g className="dark:fill-white fill-black">
        <path d="M115,0h-3v3h3V0z" />
        <path d="M112,3h-3v3h3V3z" />
        <path d="M115,6h-3v3h3V6z" />
        <path d="M118,3h-3v3h3V3z" />
      </g>
      <image
        width="118"
        height="101"
        xlinkHref={RestrictedMainnetBackground}
        clipPath="url(#restrictedMainnetCircle)"
      />
    </svg>
  );
};
export default RestrictedMainnet;
