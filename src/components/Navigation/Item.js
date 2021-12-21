import React from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";
import LinkArrow from "../Svg/LinkArrow";

const NavigationItem = ({ item }) => {
  const intl = useIntl();
  return (
    <li>
      {item.link.startsWith("http") ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
        >
          {intl.formatMessage({ id: item.text })}
        </a>
      ) : (
        <div>
          <Link
            to={item.link}
            className="inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
          >
            {intl.formatMessage({ id: item.text })}
          </Link>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
