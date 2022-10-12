import React, { useEffect, useState } from "react";
import HUD from "../../components/TradingLaunch/HUD/HUD";
import Story from "../../components/TradingLaunch/Story/Story";
import PlanetBottom from "../../components/TradingLaunch/PlanetBottom";
import StarfieldAnimation from "../../components/TradingLaunch/Starfield";
import Interruption from "../../components/TradingLaunch/Interruption";

const TradingLaunch = () => {
  const [startStory, setStartStory] = useState(false);

  const triggerStory = (state) => {
    if (state === "started") {
      setStartStory(true);
    }
    return state;
  };

  return (
    <div className="h-screen">
      <StarfieldAnimation
        numParticles={1000}
        lineWidth={2.5}
        depth={600}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <PlanetBottom className="fixed bottom-0 left-0 right-0" />
      {!startStory && <Interruption />}
      <HUD mode={startStory ? "story" : ""} />
      <Story stateCallback={triggerStory} />
    </div>
  );
};

export default TradingLaunch;
