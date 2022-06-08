import { useMediaQuery } from "react-responsive";

export const MQXLarge = ({ children }) => {
  const isXLDesktop = useMediaQuery({ minWidth: 1600 });
  return isXLDesktop ? children : null;
};

export const MQLargeUp = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const MQLarge = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1599 });
  return isDesktop ? children : null;
};

export const MQMedium = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const MQSmall = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
