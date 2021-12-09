import React from "react";
import IconDarkMode from "./Svg/IconDarkMode";
import IconLightMode from "./Svg/IconLightMode";

const ScreenModeIcon = ({ icon }) => {
  return <div>{icon === "light" ? <IconLightMode /> : <IconDarkMode />}</div>;
};

export default ScreenModeIcon;
