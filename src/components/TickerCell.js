import React from "react";
import SquareBullet from "./Svg/SquareBullet";
import TextLink from "./TextLink";

const TickerCell = ({ title, value, text, link }) => {
  return (
    <div className="px-6 py-2 md:py-4 pr-16 border-l border-r-0 border-current min-w-[12.5rem] flex items-center">
      <div>
        {title && (
          <div className="uppercase text-[0.9375rem]">
            <SquareBullet size="11" /> {title}
          </div>
        )}

        {value && (
          <div className="mt-1 text-[1.5rem] lg:text-[1.875rem] leading-none">
            {value}
          </div>
        )}

        {text && (
          <div className="text-[1.5rem] lg:text-[1.875rem] leading-none uppercase">
            {link ? <TextLink to={link}>{text}</TextLink> : <div>text</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TickerCell;
