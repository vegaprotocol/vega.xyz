import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import {
  MQLargeUp,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const EfficientPriceDiscoveryDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLargeUp>
        <Large className="max-w-[31rem] mx-auto" />
      </MQLargeUp>
    </div>
  );
};
export default EfficientPriceDiscoveryDiagramResponsive;
