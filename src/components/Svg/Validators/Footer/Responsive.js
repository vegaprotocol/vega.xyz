import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import {
  MQXLargeUp,
  MQLarge,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const ValidatorsFooterResponsive = () => {
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
      <MQXLargeUp>
        <div className="max-w-[100rem] mx-auto">
          <Large />
        </div>
      </MQXLargeUp>
    </div>
  );
};
export default ValidatorsFooterResponsive;
