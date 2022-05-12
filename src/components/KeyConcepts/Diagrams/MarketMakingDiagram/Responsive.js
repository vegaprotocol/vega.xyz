// import React from "react";
// import Small from "./Small";
// import Medium from "./Medium";
// // import Large from "./Large";

// const MarketMakingDiagramResponsive = () => {
//   return (
//     <div>
//       <Small className="md:hidden mx-auto" />
//       <Medium className="hidden md:block max-w-[960px] mx-auto" />
//       {/* <Large className="hidden lg:block" /> */}
//     </div>
//   );
// };
// export default MarketMakingDiagramResponsive;

import React from "react";
import Small from "./Small";
import Medium from "./Medium";
import Large from "./Large";
import { MQLarge, MQMedium, MQSmall } from "../../../../utils/media-queries.js";

const MarketMakingDiagramResponsive = () => {
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
    </div>
  );
};
export default MarketMakingDiagramResponsive;
