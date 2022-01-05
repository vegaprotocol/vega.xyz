import React, { useState } from "react";
import Container from "../../components/Container";
import { SiteNavigation } from "../../data/SiteNavigation";
import { useIntl, Link } from "gatsby-plugin-react-intl";
import { motion } from "framer-motion";
import DropdownArrow from "../Svg/DropdownArrow.js";
import LinkArrow from "../Svg/LinkArrow";

const MobileMenu = () => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { display: "block", opacity: 1 },
    closed: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <div className="top-[8.1875rem] fixed bottom-0 left-0 right-0 dark:bg-black bg-white">
      <Container>
        <ul className="max-w-[15rem] text-lg tracking-wide">
          {SiteNavigation.map((section, idx) =>
            section.links ? (
              <li key={idx}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[2.125rem] block py-4 uppercase"
                >
                  <span className="pr-3">
                    {intl.formatMessage({ id: section.text })}
                  </span>
                  <div
                    className={`inline-block align-top ${
                      isOpen ? "rotate-180" : null
                    }`}
                  >
                    <DropdownArrow></DropdownArrow>
                  </div>
                </button>
                <motion.div
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                >
                  <ul className="mb-6">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        {link.to.startsWith("http") ? (
                          <a
                            href={link.to}
                            target="_blank"
                            rel="noreferrer"
                            className="block py-2 hover:text-vega-mid-grey"
                          >
                            {intl.formatMessage({ id: link.text })}
                            <span className="inline-block ml-2">
                              <LinkArrow />
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={link.to}
                            className="block py-2 hover:text-vega-mid-grey"
                          >
                            {intl.formatMessage({ id: link.text })}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </li>
            ) : (
              <li>
                <a
                  href={section.link}
                  className="text-[2.125rem] block py-4 uppercase"
                >
                  {intl.formatMessage({ id: section.text })}
                </a>
              </li>
            )
          )}
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;
