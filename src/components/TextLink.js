import { Link } from "gatsby";
import React from "react";
import LinkArrow from "./Svg/LinkArrow";

const TextLink = (props) => {
  const isExternal = props.to.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={props.to}
        target="_blank"
        rel="noreferrer"
        className={`${props.className} hover:underline`}
      >
        {props.children}
        {props.to.startsWith("http") && (
          <span className="inline-block ml-2">
            <LinkArrow />
          </span>
        )}
      </a>
    );
  } else {
    return (
      <Link to={props.to} className={`${props.className} hover:underline`}>
        {props.children}
      </Link>
    );
  }
};

export default TextLink;
