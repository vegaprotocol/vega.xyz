import React from "react";
import Tooltip from "./UI/Tooltip";
import Tippy from "@tippyjs/react";

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
      <span className="bg-[#666666] px-1.5 inline-block text-white relative">
        {prefix && prefix}
        {value}
        {suffix && suffix}

        {description && (
          <Tippy
            content={
              <div className="dark:text-white text-black mt-2 body-s text-left font-not-glitched">
                <Tooltip>{description}</Tooltip>
              </div>
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer inline-block ml-1.5 align-middle relative -top-px"
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
          </Tippy>
        )}
      </span>
    </>
  );
};

export default ParameterBox;
