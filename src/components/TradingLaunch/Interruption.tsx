import React, { useRef } from "react";
import TypeoutText from "./Story/TypeoutText";
import VideoBackground from "../Svg/VideoBackground";

const Interruption = () => {
  const splashScreen = useRef<HTMLDivElement>(null);

  const finished = (finished) => {
    if (finished) {
      setTimeout(function () {
        if (splashScreen && splashScreen.current) {
          splashScreen.current.style.opacity = "0";
          setTimeout(function () {
            if (splashScreen && splashScreen.current) {
              splashScreen.current.remove();
            }
          }, 1000);
        }
      }, 2000);
    }
  };

  const HeroLine = () => {
    return (
      <div className="relative text-[7.1875rem] uppercase font-glitch-all leading-[0.8] max-w-[62.5rem] mx-auto text-center">
        A new era of finance begins
        <span className="VegaTypewriter__cursor"></span>
      </div>
    );
  };

  const HeroBody = () => {
    return (
      <>
        <div className="text-[1.75rem] max-w-[62.5rem] mx-auto text-center mt-6">
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
      <div className="absolute inset-0 text-white z-10 flex flex-col items-center justify-center">
        <HeroLine />
        <HeroBody />
      </div>
      <div
        className="absolute inset-0 text-white z-20 transition-opacity duration-1000 flex flex-col items-center justify-center"
        ref={splashScreen}
      >
        <VideoBackground />

        <div>
          <div className="relative">
            <div className="absolute inset-0">
              <div className="text-[7.1875rem] uppercase font-glitch-all leading-[0.8] max-w-[62.5rem] mx-auto text-center">
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
