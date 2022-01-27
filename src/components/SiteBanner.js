import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import siteBannerBackground from "../images/site-banner-background.png";

const Banner = styled.div`
  animation-name: panBackground;
  background-image: url(${siteBannerBackground});
  background-size: cover;
`;

const SiteBanner = () => {
  return (
    <div>
      <Banner>
        <div className="container mx-auto py-3 text-center text-white underline hover:no-underline">
          <Link to="/ethdenver">Vega does ETHDenver 2022</Link>
        </div>
      </Banner>
    </div>
  );
};

export default SiteBanner;
