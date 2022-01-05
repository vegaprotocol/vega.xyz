import React from "react";
import ButtonLink from "./ButtonLink";

const BoxLink = ({ title, text, linkTitle, link, icon }) => {
  return (
    <div className="relative flex flex-col justify-between border border-black dark:border-white">
      <div className="p-4">
        <div className="relative">
          <div className="text-[1.5rem] font-glitched leading-[0.85] mb-3">
            {title}
          </div>
          <span className="text-[0.9375rem] leading-[1.3] text-vega-mid-grey">
            {text}
          </span>
          <div className="absolute right-0 top-0">
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-[-1.5625rem] relative -left-px">
        <ButtonLink link={link} text={linkTitle} />
      </div>
    </div>
  );
};

export default BoxLink;
