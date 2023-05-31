import React from 'react'
import { Link } from 'gatsby'
import VegaLogo from '../../components/Svg/VegaLogo'
import MobileMenuButton from './MobileMenuButton'
import Container from '../../components/Container'
import MobileNavigation from './MobileNavigation'
import HeaderCta from '../../components/HeaderCta'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const MobileMenu = ({ toggleMenu, isOpen }) => {
  const { t } = useTranslation('common')
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 overflow-y-scroll bg-white pb-12 dark:bg-black ${
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

        <HeaderCta
          link="https://console.vega.xyz/"
          text={t('Launch console')}
          className="inline-block"
        />
      </Container>
    </div>
  )
}

export default MobileMenu
