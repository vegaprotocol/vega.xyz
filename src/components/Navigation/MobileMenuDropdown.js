import React, { useState } from "react";
import { Link } from "gatsby";
import DropdownArrow from "../Svg/DropdownArrow.js";
import LinkArrow from "../Svg/LinkArrow";

const MobileMenuDropdown = ({ section }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="font-not-glitched text-[2.125rem] block py-4 uppercase"
      >
        <span className="pr-3">{section.text}</span>
        <div
          className={`inline-block align-top ${
            isDropdownOpen ? "rotate-180" : null
          }`}
        >
          <DropdownArrow></DropdownArrow>
        </div>
      </button>
      <ul className={`mb-3 ${isDropdownOpen ? "block" : "hidden"}`}>
        {section.links.map((link, idx) => (
          <li key={idx}>
            {link.to.startsWith("http") ? (
              <a
                href={link.to}
                target="_blank"
                rel="noreferrer"
                className="block py-2 hover:text-vega-mid-grey"
              >
                {link.text}
                <span className="inline-block ml-2">
                  <LinkArrow />
                </span>
              </a>
            ) : (
              <Link
                to={link.to}
                className="block py-2 hover:text-vega-mid-grey"
              >
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenuDropdown;
