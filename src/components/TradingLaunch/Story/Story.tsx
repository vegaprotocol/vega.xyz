import { Function } from "aws-sdk/clients/transfer";
import React, { useEffect, useState } from "react";
import TypeoutText from "./TypeoutText";
import VegaBond from "../VegaBond";
import { motion } from "framer-motion";

type Props = {
  stateCallback?: (state: string) => Function;
};

const script = [
  "I am coming to you from the year 2052. And I am here to tell you, now that trading is live, the future is to be pioneered by you – and the entire Vega network.",
  "You reached what we in 2052 celebrate as a momentous milestone: Alpha Mainnet trading.",
  "But timelines are at risk of splitting as the old system clings to life. So know this... The decisions you make about what you value, how to trade and exchange it are about to define the future.",
  "30 years ago today we Vegabonds watched Vega launch market creation and derivatives trading on the blockchain.",
  "I could tell you this was the moment that unlocked wealth creation for the masses, by the masses.",
  "Just know this… every action taken on this network matters and is appreciated.",
  "All participation makes it stronger, and guarantees this future I am speaking from.",
  "From where I’m standing, the freedom to trade is now accessible to anyone.",
  "Explore the timeline that gets you to the future. Or start trading to take a small step into decentralised finance – and a giant leap for mankind",
];

const Story = ({ stateCallback }: Props) => {
  const [textIndex, setTextIndex] = useState(-1);
  const [text, setText] = useState("");
  const [ready, setReady] = useState(true);

  const setReadyState = (ready) => {
    setReady(ready);
  };

  useEffect(() => {
    const spacebar = (event) => {
      if (event.code === "Space" && ready) {
        let getTextIndex = textIndex + 1;
        setReady(false);

        if (textIndex === -1) {
          stateCallback ? stateCallback("started") : "";
        }

        setTextIndex(getTextIndex);
        setText(script[getTextIndex]);
      }
      event.preventDefault();
    };

    document.addEventListener("keydown", spacebar, false);

    return () => {
      document.removeEventListener("keydown", spacebar);
    };
  }, [textIndex, ready, stateCallback]);

  return (
    <div className={`absolute inset-5 text-white`}>
      <div className="h-full grid grid-rows-2 grid-cols-1">
        <div className="flex flex-col justify-center items-center px-16">
          <div className="relative text-white w-[58.125rem] max-w-full mx-auto text-left text-[1.75rem] font-glitched">
            <div className="invisible">
              {text}
              <div>
                Press spacebar to continue...
                <span className="VegaTypewriter__cursor"></span>
              </div>
            </div>
            {text && (
              <div className="absolute inset-0">
                <TypeoutText
                  text={text + "<br/><br/>Press spacebar to continue..."}
                  key={text}
                  ready={setReadyState}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end">
          {textIndex > -1 && (
            <div className="translate-y-5">
              <VegaBond />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
