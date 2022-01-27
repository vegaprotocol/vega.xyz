import React from "react";
import MenuCloseIcon from "../Svg/MenuCloseIcon";
import MenuOpenIcon from "../Svg/MenuOpenIcon";

const MobileMenuButton = ({ open, toggleMenu, showOnMobileOnly = true }) => {
  return (
    <button
      aria-label="Toggle navigation menu"
      onClick={() => toggleMenu()}
      className={`hover:bg-vega-light-grey dark:hover:bg-vega-off-black ml-1 rounded-full cursor-pointer ${
        showOnMobileOnly ? "lg:hidden" : ""
      }`}
    >
      {open ? <MenuOpenIcon /> : <MenuCloseIcon />}
    </button>
  );
};

export default MobileMenuButton;
