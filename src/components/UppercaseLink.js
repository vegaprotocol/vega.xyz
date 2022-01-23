import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const UppercaseLink = ({ text, link }) => {
  const isExternal = link.startsWith("http");
  const linkClass =
    "text-[0.9375rem] uppercase underline underline-offset-4 decoration-1 hover:no-underline";

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkClass}>
        {text}
        {link.startsWith("http") && (
          <span className="inline-block ml-2">
            <LinkArrow />
          </span>
        )}
      </a>
    );
  } else {
    const file = /\.[0-9a-z]+$/i.test(link);
    if (file) {
      return (
        <a href={link} className={linkClass}>
          {text}
        </a>
      );
    } else {
      return (
        <Link to={link} className={linkClass}>
          {text}
        </Link>
      );
    }
  }
};

export default UppercaseLink;
