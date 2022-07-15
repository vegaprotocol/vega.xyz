import React from "react";

const AddGraphic = (props) => {
  return (
    <div className="relative w-full" {...props}>
      <svg
        width="256"
        height="105"
        viewBox="0 0 256 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <pattern
            id="useDiagram"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#useDiagramBg"
              transform="translate(-0.0776411 -0.174408) scale(0.00205691 0.00466174)"
            />
          </pattern>
          <image
            style={{ overflow: `visible` }}
            id="useDiagramBg"
            xlinkHref="/key-concepts-background.jpg"
          ></image>
        </defs>
        <path
          d="M6.6,66.5c2.5-6.9,6.7-15.9,13.5-21.2c11.3-8.8,23.7,3.5,37.8,4.1
	c26.1,1,28.1-23.4,48-28.2c14-3.4,27.4,10.5,35.8,45.4"
          fill="url(#phase1Diagram)"
        />

        <clipPath id="useDiagramClipPath">
          <rect width="255.56" height="104.66" fill="white" />
        </clipPath>

        <g clipPath="url(#useDiagramClipPath)">
          <path
            d="M0 104.66C12.64 57.6901 55.82 35.4701 87.71 45.6801C135.09 60.8501 138.44 21.6101 176.12 11.7401C202.6 4.80011 239.58 33.1501 255.56 104.66"
            fill="url(#useDiagram)"
          />
          <path
            d="M119.33 77.66V98.66H122.33V104.66H125.33V98.66H128.33V104.66H131.33V98.66H134.33V77.66H119.33ZM122.33 86.66V83.66H125.33V86.66H122.33ZM131.33 86.66H128.33V83.66H131.33V86.66Z"
            fill="white"
          />
          <path
            d="M138.206 86.2816L131.828 92.6597L133.957 94.7881L140.335 88.41L138.206 86.2816Z"
            fill="white"
          />
          <path d="M137.33 61.66V59.66H135.33V61.66" fill="white" />
          <path d="M133.33 57.66V55.66H131.33V57.66" fill="white" />
          <path d="M149.33 57.66V55.66H147.33V57.66" fill="white" />
          <path d="M133.33 73.66V71.66H131.33V73.66" fill="white" />
          <path d="M149.33 73.66V71.66H147.33V73.66" fill="white" />
          <path d="M141.33 77.66V75.66H139.33V77.66" fill="white" />
          <path d="M145.33 61.66V59.66H143.33V61.66" fill="white" />
          <path d="M143.33 59.66V57.66H137.33V59.66" fill="white" />
          <path d="M143.33 59.66V57.66H137.33V59.66" fill="white" />
          <path d="M143.33 65.66V63.66H137.33V65.66" fill="white" />
          <path d="M135.33 61.66H133.33V67.66H135.33" fill="white" />
          <path d="M141.33 65.66H139.33V71.66H141.33" fill="white" />
          <path d="M147.33 61.66H145.33V67.66H147.33" fill="white" />
          <path d="M137.33 67.66H135.33V71.66H137.33" fill="white" />
          <path d="M141.33 51.66H139.33V55.66H141.33" fill="white" />
          <path d="M127.33 63.66V65.66H131.33V63.66" fill="white" />
          <path d="M149.33 63.66V65.66H153.33V63.66" fill="white" />
          <path d="M139.33 71.66H137.33V75.66H139.33" fill="white" />
          <path d="M145.33 67.66H143.33V71.66H145.33" fill="white" />
          <path d="M143.33 71.66H141.33V75.66H143.33" fill="white" />
          <path d="M141.33 71.66H139.33V75.66H141.33" fill="white" />
          <path d="M68.7197 32.8301H184.93V30.8301H68.7197" fill="white" />
          <path d="M68.7197 104.66V32.8301H66.7197V104.66" fill="white" />
          <path d="M186.93 104.66V32.8301H184.93V104.66" fill="white" />
          <path d="M66.7197 4V2H64.7197V4" fill="white" />
          <path d="M68.7197 2V0H66.7197V2" fill="white" />
          <path d="M70.7197 4V2H68.7197V4" fill="white" />
          <path d="M68.7197 6V4H66.7197V6" fill="white" />
          <path d="M208.09 81.2V79.2H206.09V81.2" fill="white" />
          <path d="M210.09 79.2V77.2H208.09V79.2" fill="white" />
          <path d="M212.09 81.2V79.2H210.09V81.2" fill="white" />
          <path d="M210.09 83.2V81.2H208.09V83.2" fill="white" />
          <path d="M36.3096 29.8301V27.8301H34.3096V29.8301" fill="white" />
          <path d="M38.3096 27.8301V23.8301H36.3096V27.8301" fill="white" />
          <path d="M38.3096 37.8301V33.8301H36.3096V37.8301" fill="white" />
          <path d="M34.3096 29.8301H30.3096V31.8301H34.3096" fill="white" />
          <path d="M44.3096 29.8301H40.3096V31.8301H44.3096" fill="white" />
          <path d="M40.3096 29.8301V27.8301H38.3096V29.8301" fill="white" />
          <path d="M36.3096 33.8301V31.8301H34.3096V33.8301" fill="white" />
          <path d="M40.3096 33.8301V31.8301H38.3096V33.8301" fill="white" />
        </g>
      </svg>
    </div>
  );
};

export default AddGraphic;
