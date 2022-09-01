import React from "react";
import Small from "./Small";
import Large from "./Large";
import XLarge from "./XLarge";
import XXLarge from "./XXLarge";
import {
  MQXXXLarge,
  MQXXLarge,
  MQXLarge,
  MQLarge,
  MQMedium,
  MQSmall,
} from "../../../../utils/media-queries.js";

const RipResponsive = () => {
  return (
    <div>
      <MQSmall>
        <Small />
      </MQSmall>
      <MQMedium>
        <Small />
      </MQMedium>
      <MQLarge>
        <Large />
      </MQLarge>
      <MQXLarge>
        <XLarge />
      </MQXLarge>
      <MQXXLarge>
        <XXLarge />
      </MQXXLarge>
      <MQXXXLarge>
        <XXLarge />
      </MQXXXLarge>
    </div>
  );
};
export default RipResponsive;
