import React, { useState, useRef } from "react";
import Star from "./Svg/Star";
import CrossSmall from "./Svg/CrossSmall";
import CrossLarge from "./Svg/CrossLarge";

const RoadMapBlock = ({ title, date, position, content }) => {
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  return (
    <div className="cursor-pointer group">
      <div
        onClick={toggleOverlay}
        className={`transition-all top-0 group-hover:-top-2 relative left-1/2 text-left w-[12rem] md:w-[20rem] mb-16  ${
          position === "right"
            ? "pl-5 md:pl-10"
            : "-translate-x-full pr-5 md:pr-10"
        }`}
      >
        <div
          className={`absolute -top-2 py-2 bg-white dark:bg-black ${
            position === "right"
              ? "left-0 -translate-x-[0.625rem]"
              : "right-0 translate-x-[0.625rem]"
          }`}
        >
          <Star />
        </div>
        <div className={`${position === "right" ? "" : "text-right"}`}>
          <div className="px-2 inline-block border border-current border-b-0">
            {date}
          </div>
        </div>
        <div className="min-h-[6rem] relative border border-current p-4 pb-8 ">
          <div className="relative">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 top-0"
            >
              <rect x="5" width="1" height="11" fill="currentColor" />
              <rect
                y="6"
                width="1"
                height="11"
                transform="rotate(-90 0 6)"
                fill="currentColor"
              />
            </svg>
            <div className="title-xs md:title-s pr-5">{title}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t h-1.5 border-current"></div>
        </div>
      </div>
      {overlayActive && (
        <div className="fixed z-50 top-0 left-0 px-6 right-0 bottom-0 dark:bg-black bg-white overflow-scroll">
          <div className="relative top-[6rem] md:top-1/4 pb-20">
            <div className="border border-current max-w-[32.5rem] mx-auto">
              <div className="border-b border-current h-6 flex items-center p-2">
                <button
                  className="dark:bg-black bg-white"
                  onClick={toggleOverlay}
                >
                  <CrossSmall className="block" />
                </button>
              </div>
              <div className="p-4">
                <div className="title-m mb-3">{title}</div>
                <div className="copy-xs text-vega-mid-grey">{content}</div>
              </div>
            </div>
          </div>
          <button className="absolute top-5 right-5" onClick={toggleOverlay}>
            <span className="title-xxs">Close</span>
            <CrossLarge className="inline-block ml-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RoadMapBlock;
