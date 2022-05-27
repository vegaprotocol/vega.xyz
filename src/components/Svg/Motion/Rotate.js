import React from "react";
import { motion } from "framer-motion";

const RotateStar = (props) => {
  return (
    <motion.g
      animate={{ rotate: props.direction === "backwards" ? -360 : 360 }}
      transition={{
        duration: props.duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {props.children}
    </motion.g>
  );
};

export default RotateStar;
