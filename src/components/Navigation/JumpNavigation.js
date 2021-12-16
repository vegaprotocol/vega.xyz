import React, { useState } from "react";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import DropdownArrow from "../Svg/DropdownArrow.js";
import Sticky from "react-stickynode";
import ScrollSpy from "react-scrollspy-navigation";

const JumpNavigation = ({ pageTitle, sections, current }) => {
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
    <Sticky enabled={true}>
      <div className="border-vega-border-grey relative z-50 pt-2 dark:bg-black bg-white border-b">
        <Container>
          <div className="flex items-center justify-between">
            <h1 className="font-glitched relative pb-2 text-2xl uppercase">
              {pageTitle}
            </h1>
            <div className="relative">
              <div className="hidden md:block">
                <ScrollSpy className="border-current">
                  {sections.map((section, index) => (
                    <a
                      href={`#${section.hash}`}
                      className={`bottom-[-1px] inline-block last:mr-0 mx-3 px-3 py-2 text-lg leading-7 border-b-4 hover:border-current border-transparent`}
                      ref={React.createRef()}
                      key={index}
                    >
                      {section.title}
                    </a>
                  ))}
                </ScrollSpy>
              </div>

              <div className="block md:hidden">
                <button
                  className="block cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {sections[0].title}
                  <span className="inline-block pl-3">
                    <DropdownArrow></DropdownArrow>
                  </span>
                </button>
                <motion.div
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={variants}
                >
                  <div className="top-[2rem] absolute right-0 py-2 bg-vega-light-grey dark:bg-vega-off-black md:block">
                    {sections.map((section, index) => (
                      <a
                        href={`#${section.hash}`}
                        className="block px-6 py-2 hover:text-vega-mid-grey"
                        key={index}
                      >
                        {section.title}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Sticky>
  );
};

export default JumpNavigation;
