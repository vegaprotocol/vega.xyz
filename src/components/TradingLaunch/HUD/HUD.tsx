import React from "react";
import FrameCornerBL from "./FrameCornerBL";
import FrameCornerBR from "./FrameCornerBR";
import FrameCornerTL from "./FrameCornerTL";
import FrameCornerTR from "./FrameCornerTR";
import FrameTop from "./FrameTop";
import FrameLogo from "./Logo";
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
      <div className="absolute inset-0 top-7 hidden md:block">
        <FrameTop />
      </div>
      <div className="relative h-full grid grid-cols-3 grid-rows-2">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0">
            <FrameCornerTL />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="-mt-1 lg:mt-2">
            <FrameLogo />
          </div>
        </div>
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
