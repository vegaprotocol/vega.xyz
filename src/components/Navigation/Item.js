import React from "react";
import { intl, Link } from "gatsby-plugin-react-intl";

const NavigationItem = ({ item }) => {
  return (
    <li>
      <Link to={item.link}>{item.text}</Link>
    </li>
  );
};

export default NavigationItem;
