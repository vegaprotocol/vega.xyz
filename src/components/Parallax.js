import React, { useState, useRef, useLayoutEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const Parallax = ({
  children,
  offset = 50,
  stiffness,
  bounce,
  velocity,
  damping,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const opacityRange = useTransform(scrollY, [initial, final], [1, 0]);
  const opacity = useSpring(opacityRange, {
    stiffness: 400,
    damping: 90,
    bounce: 0.25,
  });

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, {
    stiffness: 400,
    damping: 60,
    bounce: 0.25,
    velocity: 8,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
