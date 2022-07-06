import React from "react";
import { Link } from "gatsby";
import LinkArrow from "./Svg/LinkArrow";

const LinkWrapper = ({
  link,
  externalLinkWrapper,
  internalLinkWrapper,
  children,
}) =>
  link.startsWith("http")
    ? externalLinkWrapper(children)
    : internalLinkWrapper(children);

const ToolBox = ({ icon, title, link, text, type }) => {
  const isExternal = link.startsWith("http");

  return (
    <LinkWrapper
      link={link}
      internalLinkWrapper={(children) => (
        <Link to={link} className="block group relative">
          {children}
        </Link>
      )}
      externalLinkWrapper={(children) => (
        <a target="_blank" className="block group relative" href={link}>
          {children}
        </a>
      )}
    >
      <div className="group-hover:-translate-y-2 border border-current p-6 relative h-full dark:bg-black bg-white">
        <img src={icon} className="mb-6" width="96" height="96" alt={title} />
        <div className="title-s block mb-4">
          {title}
          {isExternal && (
            <span className="relative top-[2px] inline-block ml-2 align-top">
              <LinkArrow />
            </span>
          )}
        </div>
        <div className="copy-xs text-vega-mid-grey">{text}</div>

        {type && (
          <div className="border border-current uppercase copy-xxs inline-block px-3 font-light">
            {type}
          </div>
        )}
      </div>
      <div className="group-hover:block hidden border-b border-l border-r border-current absolute bottom-0 left-0 right-0 h-3" />
    </LinkWrapper>
  );
};

export default ToolBox;
