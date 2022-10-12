import React from "react";
import VideoBackground from "../Svg/VideoBackground";

type Props = {
  className?: string;
};

const PlanetBottom = ({ className }: Props) => {
  return (
    <div className={className ? className : ""}>
      <div className="pb-[12.5585938%] relative w-full h-auto">
        <VideoBackground />

        <svg
          x="0px"
          y="0px"
          viewBox="0 0 1536 192.9"
          className="absolute left-0 right-0 top-0 h-auto"
        >
          <path
            className="fill-white dark:fill-black"
            d="M0,0v100.1c246.9-56.4,504-86.2,768-86.2s521.1,29.8,768,86.2V0H0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PlanetBottom;
