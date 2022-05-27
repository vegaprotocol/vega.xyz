import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import { MQLarge, MQMedium, MQSmall } from "../../../../utils/media-queries.js";

const CommunityCurationOfMarketsDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLarge>
        <Large />
      </MQLarge>
    </div>
  );
};
export default CommunityCurationOfMarketsDiagramResponsive;
