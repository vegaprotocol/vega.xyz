import React from "react";
import MainnetBackground from "../../../images/roadmap/mainnet-background.jpg";

export interface Params {
  className?: string;
}

const V2Mainnet = ({ className }: Params) => {
  return (
    <svg
      width="223.1"
      height="131.7"
      viewBox="0 0 223.1 131.7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <image
        width="326"
        height="328"
        xlinkHref={MainnetBackground}
        clipPath="url(#mainnetV2Circle)"
      />
      <defs>
        <clipPath id="mainnetV2Circle">
          <ellipse
            transform="matrix(0.7069 -0.7073 0.7073 0.7069 -13.8948 98.181)"
            fill="#BFCCD6;"
            cx="111.5"
            cy="65.9"
            rx="65.7"
            ry="66"
          />
        </clipPath>
      </defs>

      <g className="dark:fill-white fill-black">
        <path d="M205,24h-3v3h3V24z" />
        <path d="M202,27h-3v3h3V27z" />
        <path d="M205,30h-3v3h3V30z" />
        <path d="M208,27h-3v3h3V27z" />
        <path d="M29,96h-3v3h3V96z" />
        <path d="M32,93v-3h-3v3v3h3V93z" />
        <path d="M26,99h-6v3h6V99z" />
        <path d="M29,102h-3v3h3V102z" />
        <path d="M32,105h-3v6h3V105z" />
        <path d="M35,102h-3v3h3V102z" />
        <path d="M41,99h-6v3h6V99z" />
        <path d="M35,96h-3v3h3V96z" />
        <path d="M3,66H0v3h3V66z" />
        <path
          style={{ fillRule: "evenodd", clipRule: "evenodd" }}
          d="M173.8,87.4c6.4,5.4,11.4,10.3,14.5,14.4c1.5,2,2.7,3.9,3.2,5.5c0.6,1.6,0.6,3.2-0.1,4.4
		c-0.7,1.2-2.1,2-3.8,2.3c-1.7,0.3-3.9,0.3-6.4,0c-5.1-0.6-11.8-2.5-19.8-5.3c-15.9-5.7-36.7-15.6-58.7-28.3
		c-22-12.6-41-25.7-53.9-36.5c-6.5-5.4-11.5-10.3-14.6-14.4c-1.5-2-2.6-3.9-3.2-5.5c-0.6-1.6-0.6-3.2,0.1-4.4
		c0.7-1.2,2.1-1.9,3.8-2.3c1.7-0.3,3.9-0.3,6.4,0c5.1,0.6,11.8,2.5,19.8,5.4l0.6,0.2l-1,1.2l-0.1,0c-7.9-2.9-14.5-4.7-19.5-5.3
		c-2.5-0.3-4.4-0.3-5.9,0c-1.5,0.3-2.3,0.8-2.8,1.6c-0.4,0.7-0.5,1.7,0,3.2c0.5,1.4,1.5,3.1,3,5.1c3,3.9,7.9,8.8,14.3,14.2
		c12.9,10.8,31.8,23.8,53.7,36.4c21.9,12.6,42.6,22.4,58.4,28.1c7.9,2.9,14.5,4.7,19.5,5.3c2.5,0.3,4.4,0.3,5.9,0
		c1.5-0.3,2.3-0.9,2.8-1.6c0.4-0.7,0.5-1.7,0-3.2c-0.5-1.4-1.5-3.1-3-5.1c-2.9-3.8-7.6-8.5-13.8-13.8L173.8,87.4z"
        />
      </g>
    </svg>
  );
};
export default V2Mainnet;
