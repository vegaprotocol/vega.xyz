import React, { useEffect, useRef } from "react"
import TypeoutText from "./Story/TypeoutText";
import VideoBackground from "../Svg/VideoBackground";
import GlitchSound from "../../audio/glitch.wav";
import DroneSound from "../../audio/drone.wav";

const Interruption = () => {
  const splashScreen = useRef<HTMLDivElement>(null);
  const glitchPlayer = useRef<HTMLAudioElement>(null);
  const dronePlayer = useRef<HTMLAudioElement>(null);


  useEffect(() => {
    if (glitchPlayer && glitchPlayer.current) {
      const playGlitch = glitchPlayer.current.play();

      if (playGlitch !== undefined) {
        playGlitch.catch(err => { });
      }
    }
  }, []);

  const finished = (finished) => {
    if (finished) {
      if (glitchPlayer && glitchPlayer.current) {
        glitchPlayer.current.pause();
      }

      setTimeout(function () {
        if (splashScreen && splashScreen.current) {
          splashScreen.current.style.opacity = "0";
          setTimeout(function () {
            if (splashScreen && splashScreen.current) {
              splashScreen.current.remove();
            }
          }, 1000);
          if (dronePlayer && dronePlayer.current) {
            const playDrone = dronePlayer.current.play();

            if (playDrone !== undefined) {
              playDrone.catch(err => { });
            }
          }
        }
      }, 2000);
    }
  };

  const HeroLine = () => {
    return (
      <div className="relative text-[9vw] lg:text-[7.1875rem] uppercase font-glitch-all leading-[0.8] max-w-[62.5rem] mx-auto text-center px-3">
        A new era of finance begins
        <span className="VegaTypewriter__cursor"></span>
      </div>
    );
  };

  const HeroBody = () => {
    return (
      <>
        <div className="text-[4vw] lg:text-[1.75rem] max-w-[62.5rem] mx-auto text-center mt-6 leading-none">
          A transmission from the future
        </div>
        <div className="text-center mt-6">
          <div className="border px-8 py-3 inline-block uppercase mx-auto">
            Hit
            <svg
              width="57"
              height="7"
              viewBox="0 0 57 7"
              fill="none"
              className="inline-block mx-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" y1="-2.18557e-08" x2="0.5" y2="7" stroke="white" />
              <line
                x1="56.5"
                y1="-2.18557e-08"
                x2="56.5"
                y2="7"
                stroke="white"
              />
              <line x1="4.37114e-08" y1="6.5" x2="57" y2="6.5" stroke="white" />
            </svg>
            to continue
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <audio ref={glitchPlayer}>
        <source src={GlitchSound} type="audio/wav" />
      </audio>
      <audio ref={dronePlayer}>
        <source src={DroneSound} type="audio/wav" />
      </audio>

      <div className="absolute inset-0 text-white z-10 top-[15%] md:top-0 md:flex md:flex-col md:items-center md:justify-center">
        <HeroLine />
        <HeroBody />
      </div>
      <div
        className="absolute inset-0 text-white z-20 pt-[15%] md:pt-0 md:flex md:flex-col md:items-center md:justify-center transition-opacity duration-1000"
        ref={splashScreen}
      >
        <VideoBackground />

        <div>
          <div className="relative">
            <div className="absolute inset-0">
              <div className="text-[9vw] lg:text-[7.1875rem] uppercase font-glitch-all leading-[0.8] max-w-[62.5rem] mx-auto text-center px-3">
                <TypeoutText
                  text="A new era of finance begins"
                  delay={120}
                  ready={finished}
                />
              </div>
            </div>
            <div className="invisible">
              <HeroLine />
            </div>
          </div>
          <div className="invisible">
            <HeroBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interruption;
