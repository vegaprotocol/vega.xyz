import React from "react";

const RoadMapStar = (props) => {
  return (
    <div {...props}>
      <div className="relative bg-white dark:bg-black py-3 inline-block">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <rect width="21" height="21" className="fill-white dark:fill-black" />
          <g className="fill-black dark:fill-white">
            <path d="M8.99996 5.99976H6V8.99972H8.99996V5.99976Z" />
            <path d="M12.0009 2.99996V0H9.00098V2.99996V5.99993H12.0009V2.99996Z" />
            <path d="M5.99993 9H0V12H5.99993V9Z" />
            <path d="M8.99996 11.9998H6V14.9997H8.99996V11.9998Z" />
            <path d="M12.0009 15H9.00098V20.9999H12.0009V15Z" />
            <path d="M15 11.9998H12V14.9997H15V11.9998Z" />
            <path d="M20.9999 9H15V12H20.9999V9Z" />
            <path d="M15 5.99976H12V8.99972H15V5.99976Z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RoadMapStar;
