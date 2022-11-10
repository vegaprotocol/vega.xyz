import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import LinkArrow from "./Svg/LinkArrow";
import { Link } from "gatsby-plugin-react-i18next";

const LinkWrapper = ({
  condition,
  internalWrapper,
  externalWrapper,
  children,
}) => (condition ? externalWrapper(children) : internalWrapper(children));

const NewsCard = ({ title, text, link, image, date, category, extra }) => {
  return (
    <LinkWrapper
      condition={link.startsWith("https://")}
      externalWrapper={(children) => (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
      internalWrapper={(children) => <Link to={link}>{children}</Link>}
    >
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
            className="mb-4"
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

          <LinkArrow className="inline-block ml-2" />
        </div>
      )}
      {text && (
        <div
          className="text-base text-vega-grey mb-2"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <div className="text-[0.875rem] text-vega-mid-grey">
        {date} {extra && <>&bull; {extra}</>}
      </div>
      <div className="dark:bg-white/10 dark:text-vega-grey bg-vega-border-grey text-white text-[0.75rem] uppercase inline-block py-0.5 px-2 mt-3">
        {category}
      </div>
    </LinkWrapper>
  );
};

export default NewsCard;
