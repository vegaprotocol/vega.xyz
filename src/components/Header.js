import React from "react";
import { Link } from "gatsby-plugin-react-intl";
import Navigation from "./Navigation";
import Container from "../components/Container";
import SiteBanner from "../components/SiteBanner";
import ScreenMode from "../components/ScreenMode";
import VegaLogo from "../components/Svg/VegaLogo";

const Header = () => {
  return (
    <header>
      <SiteBanner />
      <Container>
        <div className="header flex items-center justify-between py-12">
          <Link to="/">
            <VegaLogo />
          </Link>

          <Navigation />

          <ScreenMode />
          {/* <div tabIndex={0}>Languages</div> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
