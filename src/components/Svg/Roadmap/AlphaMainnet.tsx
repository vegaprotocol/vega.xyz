import React from "react";
import AlphaMainnetBackground from "../../../images/roadmap/alpha-mainnet-background.jpg";

export interface Params {
  className?: string;
}

const AlphaMainnet = ({ className }: Params) => {
  return (
    <svg
      width="266.8"
      height="208.7"
      viewBox="0 0 266.8 208.7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <defs>
        <clipPath id="alphaMainnetCircle">
          <circle cx="133.382" cy="105.118" r="103.619" fill="#FFFFFF" />
        </clipPath>
      </defs>
      <g className="dark:fill-white fill-black">
        <path d="M8.99996 158H6V161H8.99996V158Z" />
        <path d="M12 155V152H9V155V158H12V155Z" />
        <path d="M5.99993 161H0V164H5.99993V161Z" />
        <path d="M8.99996 164H6V167H8.99996V164Z" />
        <path d="M12 167H9V173H12V167Z" />
        <path d="M15 164H12V167H15V164Z" />
        <path d="M20.9999 161H15V164H20.9999V161Z" />
        <path d="M15 158H12V161H15V158Z" />
        <path d="M89 54H86V57H89V54Z" />
        <path d="M86 57H83V60H86V57Z" />
        <path d="M89 60H86V63H89V60Z" />
        <path d="M92 57H89V60H92V57Z" />
        <path d="M249 152H246V155H249V152Z" />
      </g>
      <image
        width="266.8"
        height="208.7"
        xlinkHref={AlphaMainnetBackground}
        clipPath="url(#alphaMainnetCircle)"
      />
      <path
        d="M191.652 19.7125C213.318 4.50139 229.322 -2.38525 234.304 2.60946C244.344 12.6745 206.901 66.4054 150.737 122.709C94.5729 179.013 40.8999 216.625 30.8598 206.56C25.8775 201.565 32.6715 185.597 47.8449 163.878"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        className="dark:stroke-white stroke-black"
      />
    </svg>
  );
};
export default AlphaMainnet;
