import React from "react";
import Moshed from "../../video/moshed.mp4";

const UniverseLeft = ({ className }) => {
  return (
    <div
      className={`pb-[253.5691318%] relative w-full ${
        className ? className : ""
      }`}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 w-full h-full object-cover"
      >
        <source src={Moshed} type="video/mp4" />
      </video>

      <svg
        xmlSpace="preserve"
        viewBox="0 0 311 788.6"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <path
          className="dark:fill-black fill-white"
          d="M0 0v226.5C0 157.2 56.2 101 125.5 101S251 157.2 251 226.5 194.8 352 125.5 352 0 295.8 0 226.5v562.1h311V668.5c0 33.4-27.1 60.5-60.5 60.5S190 701.9 190 668.5s27.1-60.5 60.5-60.5 60.5 27.1 60.5 60.5V0H0z"
        />
        <path
          d="M248.6 489.4h-3.2v3.2h3.2v-3.2zm3.2-3.2V483h-3.2v6.4h3.2v-3.2zm-6.4 6.4H239v3.2h6.4v-3.2zm3.2 3.2h-3.2v3.2h3.2v-3.2zm3.2 3.1h-3.2v6.4h3.2v-6.4z"
          className="dark:fill-white fill-black"
        />
        <path
          d="M254.9 495.8h-3.2v3.2h3.2v-3.2zm6.4-3.2h-6.4v3.2h6.4v-3.2zm-6.4-3.2h-3.2v3.2h3.2v-3.2zm-144.3-91h-3.2v3.2h3.2v-3.2zm3.2-3.2V392h-3.2v6.4h3.2v-3.2zm-6.4 6.4H101v3.2h6.4v-3.2zm3.2 3.2h-3.2v3.2h3.2v-3.2zm3.2 3.1h-3.2v6.4h3.2v-6.4z"
          className="dark:fill-white fill-black"
        />
        <path
          d="M116.9 404.8h-3.2v3.2h3.2v-3.2zm6.4-3.2h-6.4v3.2h6.4v-3.2zm-6.4-3.2h-3.2v3.2h3.2v-3.2zm104.7-194.5h-3.2v3.2h3.2v-3.2zm3.2-3.2v-3.2h-3.2v6.4h3.2v-3.2zm-6.4 6.4H212v3.2h6.4v-3.2zm3.2 3.2h-3.2v3.2h3.2v-3.2zm3.2 3.1h-3.2v6.4h3.2v-6.4z"
          className="dark:fill-white fill-black"
        />
        <path
          d="M227.9 210.3h-3.2v3.2h3.2v-3.2zm6.4-3.2h-6.4v3.2h6.4v-3.2zm-6.4-3.2h-3.2v3.2h3.2v-3.2zm9.4-9.6h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.1-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.1h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2H250v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2V172zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.1-3.2H266v3.2h3.2v-3.2z"
          className="dark:fill-white fill-black"
        />
        <path
          d="M272.3 159.3h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.1-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.1h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2H301v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2V121zM201.2 540.2H198v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2V537zm0 6.4h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2zm-38.4-537H166v3.2h3.2V3.2zm3.2-3.2h-3.2v3.2h3.2V0zm0 6.4h-3.2v3.2h3.2V6.4zm3.2-3.2h-3.2v3.2h3.2V3.2zM144.2 726H141v3.2h3.2V726zm135 56.2H276v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2V779zm0 6.4h-3.2v3.2h3.2v-3.2zm3.2-3.2h-3.2v3.2h3.2v-3.2z"
          className="dark:fill-white fill-black"
        />
      </svg>
    </div>
  );
};

export default UniverseLeft;
