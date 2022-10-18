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
      <Tippy
        content={
          description && (
            <div className="dark:text-white text-black mt-2 body-s text-left font-not-glitched">
              <Tooltip>{description}</Tooltip>
            </div>
          )
        }
      >
        <span className="group cursor-pointer px-1.5 inline-block relative dark:text-white text-black dark:bg-[#404040] dark:hover:bg-[#8B8B8B] bg-[#D2D2D2] hover:bg-[#A7A7A7]">
          {prefix && `${prefix}`}
          {value}
          {suffix && `${suffix}`}

          {description && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block ml-1.5 align-middle relative -top-px"
            >
              <rect
                x="1"
                y="15"
                width="14"
                height="14"
                rx="7"
                transform="rotate(-90 1 15)"
                className="dark:fill-[#8B8B8B] dark:group-hover:fill-[#C0C0C0] fill-[#A7A7A7] group-hover:fill-[#626262]"
              />
              <rect x="7.5" y="4.5" width="1" height="1" fill="white" />
              <rect x="7.5" y="6.5" width="1" height="5" fill="white" />
            </svg>
          )}
        </span>
      </Tippy>
    </>
  );
};

export default ParameterBox;
