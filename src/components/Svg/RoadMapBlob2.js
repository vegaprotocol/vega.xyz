import React from "react";
import VideoBackground from "./VideoBackground";

const RoadMapBlob2 = ({ className }) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      <VideoBackground />
      <svg
        viewBox="0 0 545.4 764.9"
        xmlSpace="preserve"
        className="relative w-full h-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0,0v764.9h545.4V0H0z M473.7,732.6C420.6,767,353.2,759.4,297,742c-59.4-18.4-113.4-62-158.9-93.4
	S8.7,548.3,8.7,458.3c0-76.3,54-129.1,115.5-183.3s74.1-174.9,171.6-238.1c116.5-75.6,237.7,6.3,237.7,98.8
	c0,78.7-85,176.7-47.2,291.6C524.1,542.2,585.5,660.2,473.7,732.6z"
          className="fill-white dark:fill-black"
        />
      </svg>
    </div>
  );
};

export default RoadMapBlob2;
