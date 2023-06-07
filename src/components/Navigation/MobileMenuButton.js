import React from 'react'
import MenuCloseIcon from '../Svg/MenuCloseIcon'
import MenuOpenIcon from '../Svg/MenuOpenIcon'

const MobileMenuButton = ({ open, toggleMenu, showOnMobileOnly = true }) => {
  return (
    <button
      aria-label="Toggle navigation menu"
      onClick={() => toggleMenu()}
      className={`font-not-glitched ml-1 cursor-pointer rounded-full hover:bg-vega-light-grey dark:hover:bg-vega-off-black ${
        showOnMobileOnly && !open ? 'lg:hidden' : ''
      }`}
    >
      {open ? <MenuOpenIcon /> : <MenuCloseIcon />}
    </button>
  )
}

export default MobileMenuButton
