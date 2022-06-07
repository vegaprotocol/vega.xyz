import React from "react";

const Phase2 = () => {
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
            id="phase2Diagram"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#phase2DiagramBackground"
              transform="translate(-0.0776411 -0.174408) scale(0.00205691 0.00466174)"
            />
          </pattern>
          <image
            style={{ overflow: `visible` }}
            id="phase2DiagramBackground"
            xlinkHref="/key-concepts-background.jpg"
          ></image>
        </defs>
        <path
          d="M6.6,66.5c2.5-6.9,6.7-15.9,13.5-21.2c11.3-8.8,23.7,3.5,37.8,4.1
	c26.1,1,28.1-23.4,48-28.2c14-3.4,27.4,10.5,35.8,45.4"
          fill="url(#phase1Diagram)"
        />

        <path
          d="M6.6,66.5c2.5-6.9,6.7-15.9,13.5-21.2c11.3-8.8,23.7,3.5,37.8,4.1
	c26.1,1,28.1-23.4,48-28.2c14-3.4,27.4,10.5,35.8,45.4"
          fill="url(#phase2Diagram)"
        />
        <g className="dark:fill-white fill-black">
          <path
            d="M116.5,66V2h-2v64H36v-6h3V39H24v21h3v6H0v2h147v-2H116.5z M33,45h3v3h-3V45z M27,45h3v3h-3V45z M30,66v-6h3v6
		H30z"
          />
          <rect x="30.5" y="2" width="2" height="34" />
          <rect x="32.5" width="82" height="2" />
          <rect x="64.5" y="35" width="2" height="2" />
          <rect x="68.5" y="47" width="2" height="2" />
          <rect x="78.5" y="35" width="2" height="2" />
          <rect x="64.5" y="17" width="4" height="2" />
          <rect x="70.5" y="49" width="4" height="2" />
          <polygon
            points="72.5,37 72.5,39 76.5,39 76.5,41 72.5,41 72.5,43 76.5,43 76.5,45 72.5,45 72.5,47 74.5,47 74.5,49 
		76.5,49 76.5,47 78.5,47 78.5,45 78.5,43 78.5,41 78.5,39 78.5,37 76.5,37 	"
          />
          <polygon
            points="72.5,45 72.5,43 68.5,43 68.5,41 72.5,41 72.5,39 68.5,39 68.5,37 66.5,37 66.5,39 66.5,41 66.5,43 
		66.5,45 66.5,47 68.5,47 68.5,45 	"
          />
          <rect x="68.5" y="15" width="8" height="2" />
          <rect x="62.5" y="31" width="2" height="4" />
          <rect x="60.5" y="23" width="2" height="8" />
          <rect x="80.5" y="31" width="2" height="4" />
          <rect x="82.5" y="23" width="2" height="8" />
          <rect x="62.5" y="19" width="2" height="4" />
          <rect x="80.5" y="19" width="2" height="4" />
          <rect x="76.5" y="17" width="4" height="2" />
        </g>
      </svg>
    </div>
  );
};

export default Phase2;
