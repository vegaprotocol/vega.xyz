import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import { MQLarge, MQMedium, MQSmall } from "../../../../utils/media-queries.js";

const PeggedOrdersDiagramResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Medium />
      </MQMedium>
      <MQLarge>
        <Medium />
      </MQLarge>
    </div>
  );
};
export default PeggedOrdersDiagramResponsive;
