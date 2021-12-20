import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const ButtonLink = ({ text, link }) => {
  const isExternal = link.startsWith("http");
  const linkClass = `group button-link relative inline-block`;
  const buttonClass = `leading-1 text-[0.9375rem] tracking-[0.01rem] transition-top transition-[top] relative z-10 group-hover:-top-1.5 top-0 inline-block px-8 py-3 dark:bg-black bg-white border border-black dark:border-white uppercase duration-75`;
  const buttonBgClass = `absolute inset-0 border border-black dark:border-white`;

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkClass}>
        <div className={buttonClass}>
          {text}
          {link.startsWith("http") && (
            <span className="inline-block ml-2">
              <LinkArrow />
            </span>
          )}
        </div>
        <div className={buttonBgClass}></div>
      </a>
    );
  } else {
    return (
      <Link to={link} className={linkClass}>
        <div className={buttonClass}>{text}</div>
        <div className={buttonBgClass}></div>
      </Link>
    );
  }
};

export default ButtonLink;
