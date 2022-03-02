import React, { useState } from "react";
import { Link } from "gatsby";
import Container from "../../components/Container";
import { SiteNavigation } from "../../data/SiteNavigation";
import DropdownArrow from "../Svg/DropdownArrow.js";
import LinkArrow from "../Svg/LinkArrow";
import VegaLogo from "../../components/Svg/VegaLogo";
import MobileMenuButton from "../../components/Navigation/MobileMenuButton";
import SiteBanner from "../../components/SiteBanner";

const MobileMenu = ({ toggleMenu, isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`top-0 fixed bottom-0 left-0 right-0 dark:bg-black bg-white overflow-y-scroll ${
        isOpen ? "fixed" : "hidden"
      }`}
      id="mobileMenu"
    >
      <SiteBanner />
      <Container>
        <div className="w-full">
          <div className="header flex items-center justify-between py-4 lg:pt-6">
            <Link to="/">
              <VegaLogo />
            </Link>

            <div>
              <MobileMenuButton
                open={isOpen}
                toggleMenu={toggleMenu}
                showOnMobileOnly={false}
              />
            </div>
          </div>
        </div>

        <ul className="max-w-[15rem] text-lg tracking-wide w-full pb-12">
          {SiteNavigation.map((section, idx) =>
            section.links ? (
              <li key={idx}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-[2.125rem] block py-4 uppercase"
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
                <ul className={`mb-6 ${isDropdownOpen ? "block" : "hidden"}`}>
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
              </li>
            ) : (
              <li key={idx}>
                <Link
                  to={section.link}
                  className="text-[2.125rem] block py-4 uppercase"
                >
                  {section.text}
                </Link>
              </li>
            )
          )}
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;
