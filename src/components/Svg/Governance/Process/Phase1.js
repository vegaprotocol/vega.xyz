import React from "react";

const Phase1 = () => {
  return (
    <div className="relative w-full">
      <svg
        width="147"
        height="68"
        viewBox="0 0 147 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <pattern
            id="phase1Diagram"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#phase1DiagramBackground"
              transform="translate(-0.0776411 -0.174408) scale(0.00205691 0.00466174)"
            />
          </pattern>
          <image
            style={{ overflow: `visible` }}
            id="phase1DiagramBackground"
            xlinkHref="/key-concepts-background.jpg"
          ></image>
        </defs>
        <path
          d="M6.6,66.5c2.5-6.9,6.7-15.9,13.5-21.2c11.3-8.8,23.7,3.5,37.8,4.1
	c26.1,1,28.1-23.4,48-28.2c14-3.4,27.4,10.5,35.8,45.4"
          fill="url(#phase1Diagram)"
        />

        <g className="dark:fill-white fill-black">
          <path
            d="M116.5,66v-6h-2v6H36v-6h3V39H24v21h3v6H0v2h147v-2H116.5z M33,45h3v3h-3V45z M27,45h3v3h-3V45z M30,66v-6h3v6
		H30z"
          />
          <rect x="30.5" y="30" width="2" height="6" />
          <rect x="114.5" y="50" width="2" height="6" />
          <rect x="114.5" y="40" width="2" height="6" />
          <rect x="114.5" y="30" width="2" height="6" />
          <rect x="114.5" y="20" width="2" height="6" />
          <rect x="114.5" y="10" width="2" height="6" />
          <polygon points="114.5,6 116.5,6 116.5,2 116.5,0 114.5,0 110.5,0 110.5,2 114.5,2 	" />
          <rect x="60.5" width="6" height="2" />
          <rect x="70.5" width="6" height="2" />
          <rect x="80.5" width="6" height="2" />
          <rect x="90.5" width="6" height="2" />
          <rect x="100.5" width="6" height="2" />
          <rect x="40.5" width="6" height="2" />
          <rect x="50.5" width="6" height="2" />
          <rect x="30.5" y="20" width="2" height="6" />
          <rect x="16" y="20" width="2" height="6" />
          <rect x="18" y="18" width="6" height="2" />
          <rect x="24" y="20" width="2" height="6" />
          <rect x="18" y="26" width="6" height="2" />
          <rect x="30.5" y="10" width="2" height="6" />
          <polygon points="32.5,2 36.5,2 36.5,0 32.5,0 30.5,0 30.5,2 30.5,6 32.5,6 	" />
          <rect x="10" y="30" width="2" height="4" />
          <rect x="12" y="28" width="4" height="2" />
          <rect x="16" y="30" width="2" height="4" />
          <rect x="12" y="34" width="4" height="2" />
          <rect x="18" y="38" width="2" height="2" />
        </g>
      </svg>
    </div>
  );
};

export default Phase1;
