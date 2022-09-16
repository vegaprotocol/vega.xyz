import React, { useState, useEffect } from "react";
import { globalHistory } from "@reach/router";
import Navigation from "./Navigation/Navigation";
import ScreenMode from "../components/ScreenMode";
import VegaLogo from "../components/Svg/VegaLogo";
import MobileMenu from "../components/Navigation/MobileMenu";
import MobileMenuButton from "../components/Navigation/MobileMenuButton";
import HeaderCta from "../components/HeaderCta";
import LanguageToggle from "../components/LanguageToggle";
// import SiteBanner from "../components/SiteBanner";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);

    if (menuIsOpen) {
      enableBodyScroll(document.querySelector("#mobileMenu"));
    } else {
      disableBodyScroll(document.querySelector("#mobileMenu"));
    }
  };

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      enableBodyScroll(document.querySelector("#mobileMenu"));
    });
  }, []);

  const { t } = useTranslation("common");

  return (
    <div>
      {/* <SiteBanner /> */}
      <header
        className="z-30 fixed dark:bg-black bg-white top-0 left-0 right-0"
        id="header"
      >
        <div className="px-4 w-full md:px-6 lg:px-8 relative">
          <div className="header flex items-center justify-between py-4 lg:pt-6">
            <Link to="/">
              <VegaLogo />
            </Link>

            <div className="hidden lg:block">
              <Navigation />
            </div>

            <div className="flex items-center">
              {!menuIsOpen && (
                <HeaderCta
                  link="https://console.fairground.wtf/"
                  text={t("Trade (Testnet)")}
                  className="hidden md:block lg:hidden mr-3"
                />
              )}

              <MobileMenu toggleMenu={toggleMenu} isOpen={menuIsOpen} />

              <div className="flex items-center">
                <ScreenMode />
                <LanguageToggle />
                <MobileMenuButton open={menuIsOpen} toggleMenu={toggleMenu} />
                {!menuIsOpen && (
                  <HeaderCta
                    link="https://console.fairground.wtf/"
                    text={t("Trade (Testnet)")}
                    className="ml-3 hidden lg:block"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
