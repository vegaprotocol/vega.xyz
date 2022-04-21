import React from "react";
import PermissionlessMarketCreationDiagramSmall from "./Small";
import PermissionlessMarketCreationDiagramMedium from "./Medium";
import PermissionlessMarketCreationDiagramLarge from "./Large";

const PermissionlessMarketCreationDiagramResponsive = () => {
  return (
    <div>
      <PermissionlessMarketCreationDiagramSmall className="md:hidden max-w-[320px] mx-auto" />
      <PermissionlessMarketCreationDiagramMedium className="hidden md:block lg:hidden" />
      <PermissionlessMarketCreationDiagramLarge className="hidden lg:block" />
    </div>
  );
};
export default PermissionlessMarketCreationDiagramResponsive;
