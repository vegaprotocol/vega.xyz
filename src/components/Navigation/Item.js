import React from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";

const NavigationItem = ({ item }) => {
  const intl = useIntl();
  return (
    <li>
      {item.link.startsWith("http") ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="transition-colors inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
          activeClassName="underline underline-offset-8 decoration-2"
        >
          {intl.formatMessage({ id: item.text })}
        </a>
      ) : (
        <div>
          <Link
            to={item.link}
            className="transition-colors inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
            activeClassName="underline underline-offset-8 decoration-2"
          >
            {intl.formatMessage({ id: item.text })}
          </Link>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
