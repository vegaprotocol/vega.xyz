import React, { useState } from "react";
import RoadMapStar from "./Svg/RoadMapStar";

const RoadMapBlock = ({ title1, title2, content, startOpen, showDoor }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex pb-12">
      <div className="w-[4rem] mr-5 shrink-0 text-center">
        <div className="relative -top-3">
          <RoadMapStar />
        </div>
      </div>
      <div>
        <div className="title-m mb-6">
          <span
            className="text-vega-mid-grey"
            dangerouslySetInnerHTML={{ __html: title1 }}
          />
          <div dangerouslySetInnerHTML={{ __html: title2 }} />
        </div>
        {startOpen ||
          (!showMore && (
            <button
              className="copy-xxs uppercase underline underline-offset-8 pb-5"
              onClick={toggleShowMore}
            >
              Expand
            </button>
          ))}
        {startOpen || showMore ? (
          <div
            className="copy-xxs md:copy-xs !mb-0 text-vega-mid-grey"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RoadMapBlock;
