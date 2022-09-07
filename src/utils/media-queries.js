import { useMediaQuery } from "react-responsive";

// Small <= 639
// Medium 640 - 767
// Large 768 - 1023
// XLarge 1024 - 1179
// XXLarge 1280 - 1535
// XXXLarge >= 1536

export const MQXXXLarge = ({ children }) => {
  const isXXXLarge = useMediaQuery({ minWidth: 1536 });
  return isXXXLarge ? children : null;
};

export const MQXXLarge = ({ children }) => {
  const isXXLarge = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });
  return isXXLarge ? children : null;
};

export const MQXLargeUp = ({ children }) => {
  const isXLargeUp = useMediaQuery({ minWidth: 1024 });
  return isXLargeUp ? children : null;
};

export const MQXLarge = ({ children }) => {
  const isXLarge = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return isXLarge ? children : null;
};

export const MQLargeUp = ({ children }) => {
  const isLargeUp = useMediaQuery({ minWidth: 768 });
  return isLargeUp ? children : null;
};

export const MQLarge = ({ children }) => {
  const isLarge = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isLarge ? children : null;
};

export const MQMediumDown = ({ children }) => {
  const isMediumDown = useMediaQuery({ maxWidth: 767 });
  return isMediumDown ? children : null;
};

export const MQMediumUp = ({ children }) => {
  const isMediumUp = useMediaQuery({ minWidth: 640 });
  return isMediumUp ? children : null;
};

export const MQMedium = ({ children }) => {
  const isMedium = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  return isMedium ? children : null;
};

export const MQSmall = ({ children }) => {
  const isSmall = useMediaQuery({ maxWidth: 639 });
  return isSmall ? children : null;
};
