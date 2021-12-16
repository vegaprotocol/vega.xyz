import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const BoxLinkSimple = ({ text, link }) => {
  const isExternal = link.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="title-s before:absolute relative z-10 before:bottom-1.5 before:left-0 before:right-0 inline-block pb-10 pt-4 px-4 w-full dark:bg-black bg-white border before:border-t border-black dark:border-white hover:-translate-y-1.5 transition-transform duration-75"
      >
        {text}
        <div className="absolute right-4 top-4">
          <LinkArrow />
        </div>
      </a>
    );
  } else {
    return (
      <Link
        to={link}
        className="title-s before:absolute relative z-10 before:bottom-1.5 before:left-0 before:right-0 inline-block pb-10 pt-4 px-4 w-full dark:bg-black bg-white border before:border-t border-black dark:border-white hover:-translate-y-1.5 transition-transform duration-75"
      >
        {text}
      </Link>
    );
  }
};

export default BoxLinkSimple;
