import React from "react";
import { Link } from "gatsby";
import Container from "../../components/Container";
import { SiteNavigation } from "../../data/SiteNavigation";
import VegaLogo from "../../components/Svg/VegaLogo";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuDropdown from "./MobileMenuDropdown";
import HeaderCta from "../../components/HeaderCta";
// import SiteBanner from "../../components/SiteBanner";

const MobileMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div
      className={`top-0 fixed bottom-0 left-0 right-0 dark:bg-black bg-white overflow-y-scroll ${
        isOpen ? "fixed" : "hidden"
      }`}
      id="mobileMenu"
    >
      {/* <SiteBanner /> */}
      <Container>
        <div className="w-full">
          <div className="header flex items-center justify-between py-4 lg:pt-6">
            <Link to="/">
              <VegaLogo />
            </Link>

            <MobileMenuButton
              open={isOpen}
              toggleMenu={toggleMenu}
              showOnMobileOnly={false}
            />
          </div>
        </div>

        <ul className="max-w-[20rem] text-lg tracking-wide w-full pb-4">
          {SiteNavigation.map((section, idx) =>
            section.links ? (
              <li key={idx}>
                <MobileMenuDropdown section={section} />
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

        <HeaderCta
          link="https://console.fairground.wtf/"
          text="Trade (Testnet)"
          className="inline-block"
        />
      </Container>
    </div>
  );
};

export default MobileMenu;
