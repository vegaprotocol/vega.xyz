import React from "react";
import Moshed from "../../video/moshed.mp4";

const RoadMapBlob1 = ({ className }) => {
  return (
    <div
      className={`pb-[133.1836735%] w-full overflow-hidden relative mx-auto ${className}`}
    >
      <div className="absolute inset-px">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center w-full h-full"
          poster="/poster-image.jpg"
        >
          <source src={Moshed} type="video/mp4" />
        </video>
      </div>

      <svg
        viewBox="0 0 490 652.6"
        xmlSpace="preserve"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <path
          className="fill-white dark:fill-black"
          d="M0,0v652.6h490V0H0z M298.1,629.3c-20.6,9.1-53.1,15.2-65.3,15.2v-0.1c-121.5,0-145.4-71.5-170.8-200.1
	c-11-56-51.8-103.7-51.8-198.8C10.2-8.8,232.8,8.4,232.8,8.4c149.2,0,121.2,180.9,118.3,202c-2.7,19.7-5.5,41-1,72.4
	c4.3,29.9,18.1,53,31.8,76c16.1,26.9,32.1,53.8,32.9,91.6C416.3,522.2,366.5,598.7,298.1,629.3z M466.7,396
	c-11.6,1-17.2-7.6-23.9-17.9c-5.6-8.6-12-18.3-23.3-24.8c-24.8-14.2-33.9-45.4-17.3-59.2c16.5-13.8,43.6-12.5,61.1,8.7
	C480.9,324,487.9,394.2,466.7,396z"
        />
      </svg>
    </div>
  );
};

export default RoadMapBlob1;
