import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import XLarge from "./XLarge";
import {
  MQXLarge,
  MQLarge,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const GovernanceResponsive = () => {
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
      <MQXLarge>
        <div className="max-w-[100rem] mx-auto">
          <XLarge />
        </div>
      </MQXLarge>
    </div>
  );
};
export default GovernanceResponsive;
