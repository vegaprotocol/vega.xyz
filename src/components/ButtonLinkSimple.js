import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const ButtonLinkSimple = ({ text, link }) => {
  const isExternal = link.startsWith("http");
  const buttonClass = `inline-block px-4 py-3 leading-1 text-[0.9375rem] tracking-[0.01rem] border border-current text-current uppercase`;

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={buttonClass}>
        {text}
        {link.startsWith("http") && (
          <span className="inline-block ml-2">
            <LinkArrow />
          </span>
        )}
      </a>
    );
  } else {
    return (
      <Link to={link} className={buttonClass}>
        {text}
      </Link>
    );
  }
};

export default ButtonLinkSimple;
