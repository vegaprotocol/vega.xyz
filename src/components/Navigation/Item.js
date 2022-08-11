import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import LinkArrow from "../Svg/LinkArrow";

const NavigationItem = ({ text, link }) => {
  return (
    <li>
      {link.startsWith("http") ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="transition-colors inline-block py-0.5 hover:text-vega-mid-grey cursor-pointer"
        >
          {text}
          <LinkArrow className="inline ml-2 relative -top-px" />
        </a>
      ) : (
        <div>
          <Link
            to={link}
            className="transition-colors inline-block py-0.5 hover:text-vega-mid-grey cursor-pointer"
          >
            {text}
          </Link>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
