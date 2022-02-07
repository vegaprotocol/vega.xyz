import React from "react";
import Small from "./Small";
import Medium from "./Medium";
// import Large from "./Large";

const MarketMakingDiagramResponsive = () => {
  return (
    <div>
      <Small className="md:hidden mx-auto" />
      <Medium className="hidden md:block max-w-[960px] mx-auto" />
      {/* <Large className="hidden lg:block" /> */}
    </div>
  );
};
export default MarketMakingDiagramResponsive;
