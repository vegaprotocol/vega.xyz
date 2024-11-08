import React from 'react'
import { Link } from 'gatsby'
import VegaLogo from '../../components/Svg/VegaLogo'
import MobileMenuButton from './MobileMenuButton'
import Container from '../../components/Container'
import MobileNavigation from './MobileNavigation'

const MobileMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 overflow-y-scroll bg-white pb-12 dark:bg-black ${
        isOpen ? 'fixed' : 'hidden'
      }`}
      id="mobileMenu"
    >
      {/* <SiteBanner /> */}
      <Container>
        <div className="w-full">
          <div className="header flex items-center justify-between py-4 lg:pt-6">
            <Link to="/">
              <VegaLogo />
            </Link>

            <MobileMenuButton
              open={isOpen}
              toggleMenu={toggleMenu}
              showOnMobileOnly={false}
            />
          </div>
        </div>
        <MobileNavigation />
      </Container>
    </div>
  )
}

export default MobileMenu
