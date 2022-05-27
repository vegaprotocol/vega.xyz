import React from "react";
import Container from "../../components/Container";
import DropdownArrow from "../Svg/DropdownArrow.js";
import Sticky from "react-stickynode";
import ScrollSpy from "react-scrollspy";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const JumpNavigation = ({ pageTitle, pageSlug, sections, current }) => {
  return (
    <Sticky enabled={true}>
      <div className="border-vega-border-grey relative z-50 pt-2 dark:bg-black bg-white border-b">
        <Container>
          <div className="hidden md:block">
            <ScrollSpy className="border-current">
              {sections.map((section, index) => (
                <AnchorLink
                  key={index}
                  className={`first:ml-0 first:pl-0 bottom-[-1px] inline-block last:mr-0 mx-3 px-3 py-2 text-lg leading-7 border-b-4 hover:border-current border-transparent`}
                  to={`/${pageSlug}/#${section.hash}`}
                  title={section.title}
                  stripHash
                >
                  {section.title}
                </AnchorLink>
              ))}
            </ScrollSpy>
          </div>

          <div className="block md:hidden">
            <div className="relative block cursor-pointer group pb-2">
              {sections[0].title}
              <span className="inline-block pl-2.5 translate-y-0.5">
                <DropdownArrow></DropdownArrow>
              </span>
              <div className="relative">
                <div className="hidden group-hover:block top-2 absolute left-0 py-3 bg-vega-light-grey dark:bg-vega-off-black md:block">
                  {sections.map((section, index) => (
                    <AnchorLink
                      key={index}
                      className={`block px-4 py-2 hover:text-vega-mid-grey`}
                      to={`/${pageSlug}/#${section.hash}`}
                      title={section.title}
                      stripHash
                    >
                      {section.title}
                    </AnchorLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Sticky>
  );
};

export default JumpNavigation;
