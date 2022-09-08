import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const NewsCard = ({ title, text, link, image, date, category, extra }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {image ? (
        <div
          className="aspect-w-16 aspect-h-9 bg-cover bg-center mb-4"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ) : (
        <div>
          <StaticImage
            class="mb-4"
            src="../images/block-placeholder.jpg"
            alt=""
            placeholder="none"
            layout="constrained"
            width={1200}
            height={679}
          />
        </div>
      )}
      {title && (
        <div className="text-[1.3125rem] font-glitched mb-2 leading-[1.2]">
          {title}
        </div>
      )}
      {text && <div className="text-base text-vega-grey mb-2">{text}</div>}
      <div className="text-[0.875rem] text-vega-mid-grey">
        {date} {extra && <>&bull; {extra}</>}
      </div>
      <div className="bg-white/10 text-vega-grey text-[0.75rem] uppercase inline-block py-0.5 px-2 mt-3">
        {category}
      </div>
    </a>
  );
};

export default NewsCard;
