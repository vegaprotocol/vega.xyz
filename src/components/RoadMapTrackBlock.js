import React from "react";
import RoadMapStar from "./Svg/RoadMapStar";
import RoadMapDoor from "./Svg/RoadMapDoor";
import { motion } from "framer-motion";

const RoadMapTrackBlock = ({ title1, title2, active }) => {
  return (
    <div className="text-center relative z-20">
      {active && (
        <div className="absolute -top-[29px] left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <RoadMapDoor />
          </motion.div>
        </div>
      )}
      <RoadMapStar
        className={`px-3 bg-black inline-block ${active ? "invisible" : ""}`}
      />
      <div className="p-1">
        <div
          className="title-xs !font-not-glitched text-vega-mid-grey"
          dangerouslySetInnerHTML={{
            __html: title1,
          }}
        />
        <div
          className="title-xs !font-not-glitched text-white"
          dangerouslySetInnerHTML={{
            __html: title2,
          }}
        />
      </div>
    </div>
  );
};

export default RoadMapTrackBlock;
