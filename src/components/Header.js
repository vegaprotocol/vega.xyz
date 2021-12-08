import React from "react";
import VegaLogo from "../images/vega-logo.svg";
import { Link } from "gatsby-plugin-react-intl";
import { graphql, useStaticQuery } from "gatsby";
import Navigation from "./Navigation";
import Container from "../components/Container";
import SiteBanner from "../components/SiteBanner";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <SiteBanner />
      <Container>
        <div className="header flex items-center justify-between py-12">
          <Link to="/">
            <img src={VegaLogo} alt={data.site.siteMetadata.title} />
          </Link>

          <Navigation />

          <div tabIndex={0}>Languages</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
