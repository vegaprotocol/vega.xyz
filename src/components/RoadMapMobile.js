import React from "react";
import RoadMapDoor from "./Svg/RoadMapDoor";
import RoadMapVegaDude from "./Svg/RoadMapVegaDude";
import RoadMapBlockMobile from "./RoadMapBlockMobile";
import { RoadMapContent } from "../data/RoadMap";
import GlitchTitle from "./GlitchTitle";

const RoadMapMobile = (props) => {
  return (
    <div id="roadmap" {...props}>
      <div className="relative">
        <div className="pt-20">
          <div className="dark:bg-black bg-white py-4">
            <GlitchTitle level={1} className="title-l md:title-xl">
              Where are we in the Roadmap?
            </GlitchTitle>
          </div>
        </div>

        <div
          className="relative
                before:content-['']
                before:absolute
                before:left-[2rem]
                before:top-1
                before:bottom-0
                before:w-px
                before:bg-gradient-to-b
                before:from-black
                before:to-white
                dark:before:from-white
                dark:before:to-black
                dark:after:bg-white
              "
        >
          <div className="absolute top-0 bottom-0 w-[4rem]">
            <div className="relative z-10">
              <RoadMapDoor />
              <RoadMapVegaDude className="absolute bottom-px left-1/2 -translate-x-1/4" />
            </div>
          </div>

          {RoadMapContent.map((block, idx) => (
            <RoadMapBlockMobile
              key={idx}
              title1={block.title1}
              title2={block.title2}
              content={block.content}
              startOpen={idx === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMapMobile;
