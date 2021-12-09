import React from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";

const NavigationItem = ({ item }) => {
  const intl = useIntl();
  return (
    <li>
      <Link
        to={item.link}
        className="hover:text-vega-mid-grey inline-block px-6 py-3 cursor-pointer"
      >
        {intl.formatMessage({ id: item.text })}
      </Link>
    </li>
  );
};

export default NavigationItem;
