import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import HUD from "../../components/TradingLaunch/HUD/HUD";
import Story from "../../components/TradingLaunch/Story/Story";
import PlanetBottom from "../../components/TradingLaunch/PlanetBottom";
import StarfieldAnimation from "../../components/TradingLaunch/Starfield/Starfield";
import Interruption from "../../components/TradingLaunch/Interruption";
import GlitchSound from "../../audio/glitch.wav";
import DroneSound from "../../audio/drone.wav";

const TradingLaunch = () => {
  const [startStory, setStartStory] = useState(false);
  const glitchPlayer = useRef<HTMLAudioElement>(null);
  const dronePlayer = useRef<HTMLAudioElement>(null);

  const triggerStory = (state) => {
    if (state === "started") {
      setStartStory(true);
    }
    return state;
  };

  const playSound = (sound) => {
    if (glitchPlayer && glitchPlayer.current) {
      glitchPlayer.current.pause();
    }
    if (dronePlayer && dronePlayer.current) {
      dronePlayer.current.pause();
    }

    switch (sound) {
      case "glitch":
        if (glitchPlayer && glitchPlayer.current) {
          glitchPlayer.current.play();
        }
        break;
      case "drone":
        if (dronePlayer && dronePlayer.current) {
          dronePlayer.current.play();
        }
        break;
      default:
        break;
    }

    return true;
  }

  const stopSound = (sound) => {
    switch (sound) {
      case "glitch":
        if (glitchPlayer && glitchPlayer.current) {
          glitchPlayer.current.pause();
        }
        break;
      case "drone":
        if (dronePlayer && dronePlayer.current) {
          dronePlayer.current.pause();
        }
        break;
      default:
        break;
    }

    return true;
  }

  return (
    <div className="h-screen">
      <audio ref={glitchPlayer}>
        <source src={GlitchSound} type="audio/wav" />
      </audio>
      <audio ref={dronePlayer}>
        <source src={DroneSound} type="audio/wav" />
      </audio>
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
      {!startStory && <Interruption playSound={playSound} stopSound={stopSound} />}
      <HUD mode={startStory ? "story" : ""} />
      <Story stateCallback={triggerStory} playSound={playSound} stopSound={stopSound} />
    </div>
  );
};

export default TradingLaunch;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    } 
  }`