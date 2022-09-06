import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import {
  MQLargeUp,
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
      <MQLargeUp>
        <div className="max-w-[100rem] mx-auto">
          <Large />
        </div>
      </MQLargeUp>
    </div>
  );
};
export default UseVegaResponsive;
