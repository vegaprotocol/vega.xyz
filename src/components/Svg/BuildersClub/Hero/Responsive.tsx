import React from "react";
import Medium from "./Medium";
import Large from "./Large";
import XLarge from "./XLarge";
import {
  MQXLargeUp,
  MQLarge,
  MQMedium,
} from "../../../../utils/media-queries.js";

const UseVegaResponsive = () => {
  return (
    <div>
      <MQLarge>
        <Large />
      </MQLarge>
      <MQXLargeUp>
        <div className="max-w-[100rem] mx-auto">
          <XLarge />
        </div>
      </MQXLargeUp>
    </div>
  );
};
export default UseVegaResponsive;
