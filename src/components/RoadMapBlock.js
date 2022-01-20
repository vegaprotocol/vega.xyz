import React from "react";
import Star from "./Svg/Star";

const RoadMapBlock = ({ title, date, position }) => {
  return (
    <div
      className={`relative left-1/2 text-left w-[12rem] md:w-[15rem] mb-16  ${
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
      <div className="relative border border-current p-4 pb-8">
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
  );
};

export default RoadMapBlock;
