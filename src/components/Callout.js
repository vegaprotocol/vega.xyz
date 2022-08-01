import React from "react";
import { Link } from "gatsby";

const Callout = (props) => {
  return (
    <div className="border border-white/20 rounded-xl p-6 bg-vega-box-grey mb-16">
      <h2 className="copy-s !mb-1.5">{props.title}</h2>
      <div className="text-vega-mid-grey copy-xs !mb-1.5">{props.text}</div>
      {props.link && (
        <Link to={props.link}>
          <span className="copy-xs underline hover:no-underline">
            {props.linkText}
          </span>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block ml-2"
          >
            <path
              d="M4.52417 10.4185L16.0883 10.4185"
              stroke="white"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
            <path
              d="M10.8323 4.94604L16.4759 10.4459L10.8323 15.9458"
              stroke="white"
              stroke-width="1.3"
              stroke-miterlimit="10"
            />
          </svg>
        </Link>
      )}
      {props.children && <div>{props.children}</div>}
    </div>
  );
};

export default Callout;
