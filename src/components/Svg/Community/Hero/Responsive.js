import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
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
        <Large />
      </MQLarge>
      <MQXLarge>
        <div className="max-w-[100rem] mx-auto">
          <Large />
        </div>
      </MQXLarge>
    </div>
  );
};
export default UseVegaResponsive;
