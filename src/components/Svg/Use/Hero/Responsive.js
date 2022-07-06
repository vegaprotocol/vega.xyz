import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import XLarge from "./XLarge";
import {
  MQXLarge,
  MQLarge,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const UseVegaResponsive = () => {
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
      <MQXLarge>
        <div className="max-w-[100rem] mx-auto">
          <XLarge />
        </div>
      </MQXLarge>
    </div>
  );
};
export default UseVegaResponsive;
