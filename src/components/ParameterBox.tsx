import React from "react";
import Tooltip from "./UI/Tooltip";

export interface NetworkParameterProps {
  value: string;
  description?: string;
  prefix?: string;
  suffix?: string;
}

const ParameterBox = ({
  value,
  prefix,
  suffix,
  description,
}: NetworkParameterProps) => {
  return (
    <>
      <div className="bg-[#666666] px-1.5 inline-block text-white relative">
        {prefix && prefix}
        {value}
        {suffix && suffix}

        {description && (
          <button className="group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block ml-1.5 align-middle relative -top-px"
            >
              <rect
                opacity="0.24"
                x="1"
                y="15"
                width="14"
                height="14"
                rx="7"
                transform="rotate(-90 1 15)"
                fill="white"
              />
              <rect x="7.5" y="4.5" width="1" height="1" fill="white" />
              <rect x="7.5" y="6.5" width="1" height="5" fill="white" />
            </svg>
            <div className="absolute top-full left-0 z-50 body-s invisible group-hover:visible text-left font-not-glitched">
              <div className="mt-2">
                <Tooltip>{description}</Tooltip>
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

export default ParameterBox;
