import React from "react";
import TestnetBackground from "../../../images/roadmap/testnet-background.jpg";

export interface Params {
  className?: string;
}

const Testnet = ({ className }: Params) => {
  return (
    <svg
      width="211"
      height="164"
      viewBox="0 0 211 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <defs>
        <clipPath id="testnetCircle">
          <circle cx="30.5" cy="12.5" r="12.5" />
        </clipPath>
      </defs>
      <defs>
        <clipPath id="testnetCircle2">
          <circle cx="105.5" cy="88.5" r="75.5" />
        </clipPath>
      </defs>
      <g className="dark:fill-white fill-black">
        <path d="M31,146h-3v3h3V146z" />
        <path d="M28,149h-3v3h3V149z" />
        <path d="M31,152h-3v3h3V152z" />
        <path d="M34,149h-3v3h3V149z" />
        <path d="M199,54h-3v3h3V54z" />
        <path d="M202,51v-3h-3v3v3h3V51z" />
        <path d="M196,57h-6v3h6V57z" />
        <path d="M199,60h-3v3h3V60z" />
        <path d="M202,63h-3v6h3V63z" />
        <path d="M205,60h-3v3h3V60z" />
        <path d="M211,57h-6v3h6V57z" />
        <path d="M205,54h-3v3h3V54z" />
      </g>
      <image
        width="326"
        height="328"
        xlinkHref={TestnetBackground}
        clipPath="url(#testnetCircle)"
      />
      <image
        width="326"
        height="328"
        xlinkHref={TestnetBackground}
        clipPath="url(#testnetCircle2)"
      />
    </svg>
  );
};
export default Testnet;
