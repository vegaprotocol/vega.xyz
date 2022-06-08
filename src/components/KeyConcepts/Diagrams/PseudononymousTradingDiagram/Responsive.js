import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import {
  MQLargeUp,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const PseudononymousTradingDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLargeUp>
        <Medium />
      </MQLargeUp>
    </div>
  );
};
export default PseudononymousTradingDiagramResponsive;
