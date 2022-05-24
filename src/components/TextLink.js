import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const TextLink = (props) => {
  const isExternal = props.to.startsWith("http");
  const colourClass =
    props.colour === `grey`
      ? `text-vega-mid-grey dark:text-vega-grey`
      : `text-black dark:text-white`;
  const underlineClass = props.underline
    ? `underline hover:no-underline`
    : `hover:underline`;

  if (isExternal) {
    return (
      <a
        href={props.to}
        target="_blank"
        rel="noreferrer"
        className={`underline-offset-1 ${props.className} ${colourClass} ${underlineClass}`}
      >
        {props.children}
        {props.to.startsWith("http") && (
          <span className="inline-block ml-2 align-middle">
            <LinkArrow />
          </span>
        )}
      </a>
    );
  } else {
    return (
      <Link
        to={props.to}
        className={`underline-offset-1 ${props.className} ${colourClass} ${underlineClass}`}
      >
        {props.children}
      </Link>
    );
  }
};

export default TextLink;
