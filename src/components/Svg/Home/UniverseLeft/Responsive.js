import React from "react";
import Large from "./Large";
import XLarge from "./XLarge";
import XXXLarge from "./XXXLarge";
import {
  MQXXXLarge,
  MQXXLarge,
  MQXLarge,
  MQLarge,
} from "../../../../utils/media-queries.js";

const UniverseLeftResponsive = () => {
  return (
    <div>
      <MQLarge>
        <Large />
      </MQLarge>
      <MQXLarge>
        <XLarge />
      </MQXLarge>
      <MQXXLarge>
        <XLarge />
      </MQXXLarge>
      <MQXXXLarge>
        <XXXLarge />
      </MQXXXLarge>
    </div>
  );
};
export default UniverseLeftResponsive;
