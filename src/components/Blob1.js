import React from "react";
import Moshed from "../video/moshed.mp4";
import styled from "styled-components";

const BlobPath = styled.path`
  fill: #fff;

  .dark & {
    fill: #000;
  }
`;

const Blob1 = () => {
  return (
    <div className="pb-[77.9032258%] relative w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 w-full h-full object-cover"
      >
        <source src={Moshed} type="video/mp4" />
      </video>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 620 483"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <BlobPath
          fillRule="evenodd"
          clipRule="evenodd"
          d="M425.6 311.4C361.7 393.2 296.2 477 182.5 482.8 115.9 486.2 55 444.2 25.2 380.4-31.7 259.2 14.3 113 97.7 54.5c81.4-57 173.8-42.8 265.6-28.6C453.2 39.8 542.4 53.6 620 0H0v483h620V227.4v102.4c-22.4 41.1-64.1 74.4-100.2 67-18.3-3.7-36-24.5-37.2-45-.8-14.2 6.3-23.5 14.3-34.2 8.8-11.7 18.9-25 21-48 5-54.3 57.1-71 83.4-56.8 6.9 3.6 13.2 8.5 18.7 14.4v-71.9c-84.2 15-138.7 84.7-194.4 156.1z"
        />
      </svg>
    </div>
  );
};

export default Blob1;
