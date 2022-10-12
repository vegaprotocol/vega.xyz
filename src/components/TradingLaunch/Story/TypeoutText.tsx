import React from "react";
import Typewriter from "typewriter-effect";

type Props = {
  text: string;
  delay?: number;
  ready?: Function;
};

const TypeoutText = ({ text, delay = 8, ready }: Props) => {
  return (
    <Typewriter
      options={{
        delay: delay,
        cursorClassName: "VegaTypewriter__cursor",
        cursor: "",
      }}
      onInit={(typewriter) => {
        typewriter
          .callFunction(() => {
            ready ? ready(false) : "";
          })
          .typeString(text)
          .start()
          .callFunction(() => {
            ready ? ready(true) : "";
          });
      }}
    />
  );
};
export default TypeoutText;
