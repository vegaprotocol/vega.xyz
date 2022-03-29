import React from "react";
import VideoBackground from "./VideoBackground";

const RoadMapDoor = () => {
  return (
    <div className="w-[54px] h-[55px] relative mx-auto">
      <VideoBackground />

      <svg
        className="absolute left-0 right-0 top-0 h-auto"
        viewBox="0 0 54 55"
        xmlSpace="preserve"
      >
        <path
          className="fill-white dark:fill-black"
          d="M0,0v55h54V0H0z M53.5,54.5h-53v-28c0-6.9,2.8-13.5,7.8-18.4C13.2,3.2,20,0.5,27,0.5s13.8,2.7,18.7,7.6
        c5,4.9,7.8,11.5,7.8,18.4V54.5z"
        />
      </svg>
    </div>
  );
};

export default RoadMapDoor;
