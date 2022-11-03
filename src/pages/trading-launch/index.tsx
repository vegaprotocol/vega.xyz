import React, { useRef, useState } from "react";
import { graphql } from "gatsby";
import HUD from "../../components/TradingLaunch/HUD/HUD";
import Story from "../../components/TradingLaunch/Story/Story";
import PlanetBottom from "../../components/TradingLaunch/PlanetBottom";
import StarfieldAnimation from "../../components/TradingLaunch/Starfield/Starfield";
import Interruption from "../../components/TradingLaunch/Interruption";
import GlitchSound from "../../audio/glitch.wav";
import DroneSound from "../../audio/drone.wav";
import MessageSound from "../../audio/message.wav";
import SoundToggle from "../../components/TradingLaunch/SoundToggle";

const TradingLaunch = () => {
  const [startStory, setStartStory] = useState(false);
  const [muted, setMuted] = useState(false);

  const [glitchPlay, setGlitchPlay] = useState(false);
  const [dronePlay, setDronePlay] = useState(false);
  const [messagePlay, setMessagePlay] = useState(false);

  const glitchPlayer = useRef<HTMLAudioElement>(null);
  const dronePlayer = useRef<HTMLAudioElement>(null);
  const messagePlayer = useRef<HTMLAudioElement>(null);

  const triggerStory = (state) => {
    if (state === "started") {
      setStartStory(true);
    }
    return state;
  };

  const soundToggle = (state) => {
    setMuted(!state);

    if(state){
      if(glitchPlay && glitchPlayer && glitchPlayer.current){
        playSound('glitch')
      }
      if(dronePlay && dronePlayer && dronePlayer.current){
        playSound('drone')
      }
      if(messagePlay && messagePlayer && messagePlayer.current){
        playSound('message')
      }
    }
  }

  const playSound = (sound) => {
    switch (sound) {
      case "glitch":
        if (glitchPlayer && glitchPlayer.current) {
          glitchPlayer.current.currentTime = 0;
          const glitchPlay = glitchPlayer.current.play();
          setGlitchPlay(true);
          if (glitchPlay !== undefined) {
            glitchPlay.then(function() {
            }).catch(function(error) {
              console.log(error)
            });
          };
        }
        break;
      case "drone":
        if (dronePlayer && dronePlayer.current) {
          setDronePlay(true);
          dronePlayer.current.currentTime = 0;
          dronePlayer.current.play();
        }
        break;
      case "message":
        if (messagePlayer && messagePlayer.current) {
          setMessagePlay(true);
          messagePlayer.current.currentTime = 0;
          messagePlayer.current.play();
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
          setGlitchPlay(false);
          glitchPlayer.current.pause();
        }
        break;
      case "drone":
        if (dronePlayer && dronePlayer.current) {
          setDronePlay(false);
          dronePlayer.current.pause();
        }
        break;
      case "message":
        console.log('stop message');
        if (messagePlayer && messagePlayer.current) {
          setMessagePlay(false);
          messagePlayer.current.pause();
        }
        break;
      default:
        break;
    }
    return true;
  }

  return (
    <div className="h-screen">
      <audio ref={glitchPlayer} loop muted={muted}>
        <source src={GlitchSound} type="audio/wav" />
      </audio>
      <audio ref={dronePlayer} loop muted={muted}>
        <source src={DroneSound} type="audio/wav" />
      </audio>
      <audio ref={messagePlayer} loop muted={muted}>
        <source src={MessageSound} type="audio/wav" />
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
      <SoundToggle className="relative z-50 p-4 top-2 focus:outline-0" soundToggle={soundToggle} />
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