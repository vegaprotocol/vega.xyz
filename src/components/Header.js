import React, { useState } from "react";
import { Link } from "gatsby-plugin-react-intl";
import Navigation from "./Navigation";
import Container from "../components/Container";
import SiteBanner from "../components/SiteBanner";
import ScreenMode from "../components/ScreenMode";
import VegaLogo from "../components/Svg/VegaLogo";
import MobileMenu from "../components/Navigation/MobileMenu";
import MobileMenuButton from "../components/Navigation/MobileMenuButton";
import { motion } from "framer-motion";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header>
      <SiteBanner />
      <Container>
        <div className="header flex items-center justify-between py-4 lg:py-8">
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
      </Container>
    </header>
  );
};

export default Header;
