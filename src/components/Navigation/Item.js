import React from "react";
import { Link } from "gatsby";

const NavigationItem = ({ item }) => {
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
          {item.text}
        </a>
      ) : (
        <div>
          <Link
            to={item.link}
            className="transition-colors inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
            activeClassName="underline underline-offset-8 decoration-2"
          >
            {item.text}
          </Link>
        </div>
      )}
    </li>
  );
};

export default NavigationItem;
