import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Callout = ({ title, text, linkText, link, image = false, children }) => {
  return (
    <div className="border border-white/20 rounded-xl bg-vega-box-grey mb-16">
      <div className={`${image ? "grid place-content-end grid-cols-2" : ""}`}>
        <div className={`p-6 ${image ? "max-w-[30rem]" : ""}`}>
          <h2 className="copy-s !mb-1.5">{title}</h2>
          {text && (
            <div className="text-vega-mid-grey copy-xs !mb-1.5">{text}</div>
          )}
          {children}
          {link && (
            <Link to={link}>
              <span className="copy-xs underline hover:no-underline">
                {linkText}
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
        </div>
        {image !== false && (
          <div className="flex items-end">
            <GatsbyImage
              image={image}
              alt=""
              className="hidden md:block rounded-xl w-full h-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Callout;
