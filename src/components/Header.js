import React, { useState } from "react";
import { Link } from "gatsby-plugin-react-intl";
import Navigation from "./Navigation";
import Container from "../components/Container";
import ScreenMode from "../components/ScreenMode";
import VegaLogo from "../components/Svg/VegaLogo";
import MobileMenu from "../components/Navigation/MobileMenu";
import MobileMenuButton from "../components/Navigation/MobileMenuButton";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);

    if (menuIsOpen) {
      document.documentElement.style.overflowY = "scroll";
    } else {
      document.documentElement.style.overflowY = "hidden";
    }
  };

  return (
    <header className="relative z-30">
      <div className="px-4 w-full md:px-6 lg:px-8">
        <div className="header flex items-center justify-between py-4 lg:pt-6">
          <Link to="/">
            <VegaLogo />
          </Link>

          <Navigation />

          {menuIsOpen && <MobileMenu />}

          <div>
            <ScreenMode />
            <MobileMenuButton open={menuIsOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
