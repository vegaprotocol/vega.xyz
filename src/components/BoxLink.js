import React from "react";
import ButtonLink from "./ButtonLink";
import Padlock from "./Svg/Padlock";
import UppercaseLink from "./UppercaseLink";

const BoxLink = ({
  title,
  text,
  linkTitle,
  link,
  icon,
  locked,
  inlineLinkTitle,
  inlineLink,
}) => {
  return (
    <div className="relative flex flex-col justify-between border border-black dark:border-white">
      <div className="p-4">
        <div className="relative pr-16">
          <div className="text-[1.5rem] font-glitched leading-[0.85] mb-3">
            {locked && <Padlock />}
            {title}
          </div>
          <div className="leading-[1.3] text-vega-mid-grey mb-3 max-w-[23.75rem]">
            {text}
          </div>
          {inlineLinkTitle && (
            <div>
              <UppercaseLink text={inlineLinkTitle} link={inlineLink} />
            </div>
          )}
          <div className="absolute right-0 top-0">{icon}</div>
        </div>
      </div>
      <div className="bottom-[-1.5625rem] relative -left-px">
        <ButtonLink link={link} text={linkTitle} minwidth={true} />
      </div>
    </div>
  );
};

export default BoxLink;
