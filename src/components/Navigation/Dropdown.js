import React, { useState } from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";
import { motion } from "framer-motion";
import Container from "../Container";

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
    <li>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block px-6 py-3 cursor-pointer"
        role="button"
        tabIndex={0}
      >
        {intl.formatMessage({ id: section.text })}
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="top-[9.1875rem] absolute left-0 right-0 py-12 bg-black border-b"
      >
        <Container>
          <ul className="grid gap-4 grid-cols-4">
            {section.links.map((link, idx) => (
              <li key={idx} className="p-6 bg-gray-900">
                <Link to={link.to}>
                  <div className="font-glitched uppercase">
                    {intl.formatMessage({ id: link.text })}
                  </div>
                  <p className="text-gray-500 text-sm">
                    {intl.formatMessage({ id: link.description })}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </motion.div>
    </li>
  );
};

export default NavigationDropdown;
