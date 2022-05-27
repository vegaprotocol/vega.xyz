import { useMediaQuery } from "react-responsive";

export const MQLarge = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
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
