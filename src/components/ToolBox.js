import React from "react";
import { Link } from "gatsby";
import LinkArrow from "./Svg/LinkArrow";
import { GatsbyImage } from "gatsby-plugin-image";

const LinkWrapper = ({
  link,
  externalLinkWrapper,
  internalLinkWrapper,
  children,
}) =>
  link.startsWith("http")
    ? externalLinkWrapper(children)
    : internalLinkWrapper(children);

const ToolBox = ({ icon, title, link, text, author, category }) => {
  const isExternal = link.startsWith("http");

  return (
    <LinkWrapper
      link={link}
      internalLinkWrapper={(children) => (
        <Link to={link} className="block group relative h-full">
          {children}
        </Link>
      )}
      externalLinkWrapper={(children) => (
        <a target="_blank" className="block group relative h-full" href={link}>
          {children}
        </a>
      )}
    >
      <div className="group-hover:-translate-y-2 border border-current p-6 relative h-full dark:bg-black bg-white flex flex-col justify-between">
        <div>
          <GatsbyImage image={icon} alt={title} className="mb-5" />
          <div className="title-s block">
            {title}
            {isExternal && (
              <span className="relative top-[2px] inline-block ml-2 align-top">
                <LinkArrow />
              </span>
            )}
          </div>

          <div className="bg-vega-border-grey rounded-md inline-block items-center mt-2 mb-4 px-1.5 text-white dark:text-current">
            {author === "Vega" && (
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block align-center mr-1.5"
              >
                <g fill="currentColor">
                  <path d="M5.9999 12H4V14H5.9999V12Z" />
                  <path d="M3.9999 10H2V12H3.9999V10Z" />
                  <path d="M1.9999 0H0V10H1.9999V0Z" />
                  <path d="M11.9999 8H10V10H11.9999V8Z" />
                  <path d="M9.9999 0H8V8.00001H9.9999V0Z" />
                  <path d="M6.0001 12H8V10H6.0001V12Z" />
                </g>
              </svg>
            )}
            <div className="text-[0.875rem] uppercase inline-block align-center">
              Made by {author}
            </div>
          </div>

          <div className="copy-xs text-vega-mid-grey">{text}</div>
        </div>
        {category && (
          <div className="pt-3">
            <div className="border border-current uppercase copy-xxs inline-block px-3 font-light !mb-0">
              {category}
            </div>
          </div>
        )}
      </div>
      <div className="group-hover:block hidden border-b border-l border-r border-current absolute bottom-0 left-0 right-0 h-3" />
    </LinkWrapper>
  );
};

export default ToolBox;
