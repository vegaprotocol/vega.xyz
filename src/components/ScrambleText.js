import React, { useEffect, useRef } from "react";
import { scramble } from "../utils/scramble.js";

const ScrambleText = ({ text }) => {
  const scrambleRef = useRef(null);

  // const handleMouseOver = () => {
  //   scramble.sequentialScramble(scrambleRef.current, 100);
  // };

  useEffect(() => {
    scramble.scrambleInit(scrambleRef.current);
    scramble.sequentialScramble(scrambleRef.current, 100);
  });

  return <div ref={scrambleRef}>{text}</div>;
};

export default ScrambleText;
