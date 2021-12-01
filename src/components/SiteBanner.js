import React from "react";
import styled from "styled-components";
import siteBannerBackground from "../images/site-banner-background.png";

const Banner = styled.div`
  animation-name: panBackground;
  background-image: url(${siteBannerBackground});
  background-size: cover;

  // animation-name: panBackground;
  // animation-duration: 100s;
  // animation-fill-mode: both;
  // animation-iteration-count: infinite;

  // @keyframes panBackground {
  //   0% {
  //     background-position: 0 0;
  //   }
  //   50% {
  //     background-position: 100% 100%;
  //   }
  //   100% {
  //     background-position: 0% 0%;
  //   }
  // }
`;

const SiteBanner = () => {
  return (
    <div>
      <Banner>
        <div className="container mx-auto py-6 text-center">
          WATCH OUR KEYNOTE FROM ETH DENVER
        </div>
      </Banner>
    </div>
  );
};

export default SiteBanner;
