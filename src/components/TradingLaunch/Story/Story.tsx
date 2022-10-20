import { Function } from "aws-sdk/clients/transfer";
import React, { useEffect, useState } from "react";
import TypeoutText from "./TypeoutText";
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
      <div className="grid grid-rows-6 grid-cols-1 h-full">
        <div>{textIndex}</div>
        <div className="text-white w-[58.125rem] max-w-full px-16 mx-auto text-left text-[1.75rem] font-glitched">
          {text && <TypeoutText text={text} key={text} ready={setReadyState} />}
          {textIndex > -1 && ready && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-8 text-center">
                <div className="border px-6 py-5 inline-block uppercase mx-auto">
                  <div className="flex justify-center items-center">
                    <svg
                      width="57"
                      height="7"
                      viewBox="0 0 57 7"
                      fill="none"
                      className="inline-block mx-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.5"
                        y1="-2.18557e-08"
                        x2="0.5"
                        y2="7"
                        stroke="white"
                      />
                      <line
                        x1="56.5"
                        y1="-2.18557e-08"
                        x2="56.5"
                        y2="7"
                        stroke="white"
                      />
                      <line
                        x1="4.37114e-08"
                        y1="6.5"
                        x2="57"
                        y2="6.5"
                        stroke="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Story;
