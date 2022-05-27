import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import { MQLarge, MQMedium, MQSmall } from "../../../../utils/media-queries.js";

const EfficientPriceDiscoveryDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLarge>
        <Large className="max-w-[31rem] mx-auto" />
      </MQLarge>
    </div>
  );
};
export default EfficientPriceDiscoveryDiagramResponsive;
