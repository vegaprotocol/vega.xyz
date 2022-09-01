import React from "react";
import Medium from "./Medium";
import XXXLarge from "./XXXLarge";
import {
  MQXXXLarge,
  MQXXLarge,
  MQXLarge,
  MQLarge,
  MQMedium,
} from "../../../../utils/media-queries.js";

const UniverseBottomResponsive = () => {
  return (
    <div>
      <MQLarge>
        <Medium />
      </MQLarge>
      <MQXLarge>
        <Medium />
      </MQXLarge>
      <MQXXLarge>
        <Medium />
      </MQXXLarge>
      <MQXXXLarge>
        <XXXLarge />
      </MQXXXLarge>
    </div>
  );
};
export default UniverseBottomResponsive;
