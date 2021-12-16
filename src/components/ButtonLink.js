import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const ButtonLink = ({ text, link }) => {
  const isExternal = link.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="relative inline-block"
      >
        <div className="leading-1 text-[0.9375rem] tracking-[0.01rem] relative z-10 inline-block px-8 py-3 dark:bg-black bg-white border border-black dark:border-white hover:-translate-y-1.5 uppercase transition-transform duration-75">
          {text}
          {link.startsWith("http") && (
            <span className="inline-block ml-2">
              <LinkArrow />
            </span>
          )}
        </div>
        <div className="absolute inset-0 border border-black dark:border-white"></div>
      </a>
    );
  } else {
    return (
      <Link to={link} className="relative inline-block">
        <div className="leading-1 text-[0.9375rem] tracking-[0.01rem] relative z-10 inline-block px-8 py-3 dark:bg-black bg-white border border-black dark:border-white hover:-translate-y-1.5 uppercase transition-transform duration-75">
          {text}
        </div>
        <div className="absolute inset-0 border border-black dark:border-white"></div>
      </Link>
    );
  }
};

export default ButtonLink;
