import React from "react";
import FrameCornerBL from "./FrameCornerBL";
import FrameCornerBR from "./FrameCornerBR";
import FrameCornerTL from "./FrameCornerTL";
import FrameCornerTR from "./FrameCornerTR";
import StatsPanel from "./StatsPanel";
import RecordingPanel from "./RecordingPanel";
import Footer from "./Footer";

type Props = {
  className?: string;
  mode?: string;
};

const HUD = ({ className, mode }: Props) => {
  return (
    <div
      className={`absolute inset-5 ${className ? className : ""} text-white`}
    >
      <div className="relative h-full grid grid-cols-3 grid-rows-2">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0">
            <FrameCornerTL />
          </div>
        </div>
        <div></div>
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0">
            <FrameCornerTR />
          </div>
        </div>

        <div className="relative overflow-hidden flex items-end pb-12">
          <div>
            <StatsPanel />
            {mode === "story" && <RecordingPanel />}
            <Footer />
            <div className="absolute bottom-0 left-0">
              <FrameCornerBL />
            </div>
          </div>
        </div>
        <div></div>
        <div className="relative overflow-hidden">
          <div className="absolute bottom-0 right-0">
            <FrameCornerBR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HUD;
