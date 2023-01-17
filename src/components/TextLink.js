import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const TextLink = (props) => {
  const isExternal = props.to.startsWith("http");
  const colourClass =
    props.colour === `blackwhite`
      ? `text-black dark:text-white`
      : "text-black dark:text-white";
  if (isExternal) {
    return (
      <span className={`${props.className}`}>
        <a
          href={props.to}
          target="_blank"
          rel="noreferrer"
          className={`underline-offset-1 ${colourClass}`}
        >
          {props.children}
        </a>
        &nbsp;&nbsp;
        {props.to.startsWith("http") && <LinkArrow className="inline" />}
        &nbsp;
      </span>
    );
  } else {
    return (
      <Link
        to={props.to}
        className={`underline-offset-1 ${props.className} ${colourClass}`}
      >
        {props.children}
      </Link>
    );
  }
};

export default TextLink;
