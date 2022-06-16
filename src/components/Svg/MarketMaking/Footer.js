import React from "react";
import VideoBackground from "../VideoBackground";

const Footer = (props) => {
  return (
    <div {...props}>
      <svg
        width="415"
        height="89"
        viewBox="0 0 415 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        <defs>
          <pattern
            id="marketMakingFooterBg"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#marketMakingFooterBg1"
              transform="translate(-0.0776411 -0.174408) scale(0.00205691 0.00466174)"
            />
          </pattern>
          <image
            style={{ overflow: `visible` }}
            id="marketMakingFooterBg1"
            xlinkHref="/key-concepts-background.jpg"
          ></image>
        </defs>

        <path
          d="M413.956 88.7167C340.258 69.0743 305.22 7.96887 210.268 6.04467C106.246 3.95443 75.2102 75.853 0 89H112.382H415L413.956 88.7167Z"
          fill="url(#marketMakingFooterBg)"
        />
        <path
          d="M265.008 89H221.658L207.106 83.7915L237.009 0L290 18.9672L265.008 89Z"
          fill="white"
        />
        <g className="fill-black">
          <path d="M249.352 35.9186L240.988 32.9221L239.993 35.7146L248.358 38.7111L249.352 35.9186Z" />
          <path d="M274.14 63.4122L275.55 59.4587L278.236 65.1615L269.73 88.9999H266.582L275.033 65.3183L274.14 63.4122Z" />
          <path d="M221.517 43.4252L222.567 40.4915L203.794 26.2073L202 28.5684L221.517 43.4252Z" />
          <path d="M222.59 6.34597L219.152 5.97729L202 28.5685L204.357 30.3648L222.59 6.34597Z" />
          <path d="M263.097 50.289L237.996 41.3074L237.001 44.0999L262.102 53.0815L263.097 50.289Z" />
          <path d="M258.312 54.8778L238.787 47.8887L237.792 50.6812L257.317 57.6704L258.312 54.8778V54.8778Z" />
          <path d="M266.089 41.9115L257.724 38.915L256.729 41.7076L265.094 44.704L266.089 41.9115Z" />
          <path d="M240.78 42.3047L237.992 41.3066L236.002 46.8834L238.79 47.8815L240.78 42.3047Z" />
          <path d="M265.295 35.3194L266.291 32.5273L260.723 30.5339L259.726 33.3259L265.295 35.3194Z" />
          <path d="M267.087 39.1121L268.084 36.3201L265.296 35.322L264.3 38.1141L267.087 39.1121Z" />
          <path d="M251.348 30.3228L252.345 27.5308L246.777 25.5373L245.78 28.3294L251.348 30.3228Z" />
          <path d="M244.77 31.1261L245.767 28.334L242.979 27.3359L241.982 30.128L244.77 31.1261Z" />
          <path d="M263.093 50.2866L260.306 49.2886L258.315 54.8653L261.103 55.8634L263.093 50.2866Z" />
        </g>
      </svg>
    </div>
  );
};

export default Footer;
