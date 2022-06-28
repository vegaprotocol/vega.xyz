import React from "react";
import { Link } from "gatsby";
import DropdownArrow from "../Svg/DropdownArrow.js";
import LinkArrow from "../Svg/LinkArrow";

const NavigationDropdown = ({ section }) => {
  return (
    <li className="relative">
      <button
        className="font-not-glitched group inline-block px-6 py-3 cursor-pointer text-left"
        tabIndex={0}
      >
        <div className="hover:text-vega-mid-grey transition-colors">
          {section.text}

          <div className="inline-block pl-3">
            <DropdownArrow></DropdownArrow>
          </div>
        </div>

        <div className="w-[12.625rem] top-[3rem] absolute left-0">
          <ul className="hidden group-hover:block py-3 w-full text-base bg-vega-light-grey dark:bg-vega-off-black">
            {section.links.map((link, idx) => (
              <li key={idx}>
                {link.to.startsWith("http") ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors block px-6 py-2 hover:text-vega-mid-grey"
                  >
                    {link.text}
                    <span className="inline-block ml-2">
                      <LinkArrow />
                    </span>
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="transition-colors block px-6 py-2 hover:text-vega-mid-grey"
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </li>
  );
};

export default NavigationDropdown;
