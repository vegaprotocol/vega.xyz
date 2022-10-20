import * as React from "react";
import LinkWrapper from "./LinkWrapper";
import LinkArrow from "../Svg/LinkArrow";

const Link = ({ to, children, className }) => {
  const isExternal = to.startsWith("http");

  return (
    <LinkWrapper to={to} className={className}>
      {children}
      {isExternal && <LinkArrow className="ml-2 inline-block" />}
    </LinkWrapper>
  );
};

export default Link;
