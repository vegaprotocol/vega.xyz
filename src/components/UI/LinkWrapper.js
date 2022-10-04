import * as React from "react";
import { Link } from "gatsby-plugin-react-i18next";

const LinkWrapper = ({ to, children, className }) => {
  const isExternal = to.startsWith("http");

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
};

export default LinkWrapper;
