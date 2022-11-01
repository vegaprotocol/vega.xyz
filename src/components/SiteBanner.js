import React from "react";
import { Link } from "gatsby";
import CrossMedium from "./Svg/CrossMedium";

const SiteBanner = ({sticky}) => {
  return (
    <div className={`${sticky ? "fixed top-0 left-0 right-0 z-50" : ""} bg-siteBanner bg-cover px-4 md:px-6 lg:px-8`}>
      <div className="flex justify-between items-center mx-auto py-3">
        <CrossMedium />
        <div>Trading is live</div>
        <Link to="/trading-launch">Follow the journey</Link>
      </div>
    </div>
  );
};

export default SiteBanner;
