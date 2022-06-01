import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import {
  MQLargeUp,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const CommunityCurationOfMarketsDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLargeUp>
        <Large />
      </MQLargeUp>
    </div>
  );
};
export default CommunityCurationOfMarketsDiagramResponsive;
