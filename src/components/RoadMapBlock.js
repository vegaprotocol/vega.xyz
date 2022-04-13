import React from "react";

const RoadMapMobile = ({ title1, title2, content, visible = true }) => {
  return (
    <div className={`${!visible ? "invisible" : ""}`}>
      <div className="flex gap-x-12">
        <div className="flex-shrink-0">
          <div
            className="title-m text-vega-mid-grey"
            dangerouslySetInnerHTML={{
              __html: `${title1}`,
            }}
          />
          <div
            className="title-m dark:text-white text-black"
            dangerouslySetInnerHTML={{
              __html: `${title2}`,
            }}
          />
        </div>
        <div
          className="copy-xs text-vega-mid-grey"
          dangerouslySetInnerHTML={{
            __html: `${content}`,
          }}
        />
      </div>
    </div>
  );
};

export default RoadMapMobile;
