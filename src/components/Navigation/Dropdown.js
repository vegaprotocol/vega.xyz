import React, { useState } from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";
import { motion } from "framer-motion";
import DropdownArrow from "../Svg/DropdownArrow.js";
import LinkArrow from "../Svg/LinkArrow";

const NavigationDropdown = ({ section }) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { display: "block", opacity: 1 },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <li className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
        className="inline-block px-6 py-3 hover:text-vega-mid-grey cursor-pointer"
        role="button"
        tabIndex={0}
      >
        {intl.formatMessage({ id: section.text })}

        <div className="inline-block pl-3">
          <DropdownArrow></DropdownArrow>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="w-[10.625rem] top-[3.4375rem] absolute left-0"
      >
        <ul className="py-3 w-full text-base bg-vega-light-grey dark:bg-vega-off-black">
          {section.links.map((link, idx) => (
            <li key={idx}>
              {link.to.startsWith("http") ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-6 py-2 hover:text-vega-mid-grey"
                >
                  {intl.formatMessage({ id: link.text })}
                  <span className="inline-block ml-2">
                    <LinkArrow />
                  </span>
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="block px-6 py-2 hover:text-vega-mid-grey"
                >
                  {intl.formatMessage({ id: link.text })}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

export default NavigationDropdown;
