import React from "react";
import ButtonLink from "./ButtonLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BoxLinkHero = ({ title, text, linkTitle, link, image }) => {
  const readyimage = getImage(image);
  return (
    <div className="dark:bg-black bg-vega-light-grey dark:border dark:border-white">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-8">
          <div className="flex flex-col justify-between p-6 h-full">
            <div className="mb-6">
              <div className="title-m font-glitched mb-1">{title}</div>
              <span className="text-[0.9375rem] leading-[1.3] text-vega-mid-grey">
                {text}
              </span>
            </div>
            <div>
              <ButtonLink link={link} text={linkTitle} />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <GatsbyImage image={readyimage} alt="title" />
        </div>
      </div>
    </div>
  );
};

export default BoxLinkHero;
