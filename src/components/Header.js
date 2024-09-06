import React, { useState, useEffect } from 'react'
import { globalHistory } from '@reach/router'
import Navigation from './Navigation/Navigation'
import ScreenMode from '../components/ScreenMode'
import VegaLogo from '../components/Svg/VegaLogo'
import MobileMenu from '../components/Navigation/MobileMenu'
import MobileMenuButton from '../components/Navigation/MobileMenuButton'
import HeaderCta from '../components/HeaderCta'
import LanguageToggle from '../components/LanguageToggle'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { GeorestrictedContext } from '../context/georestricted'

const Header = ({ sticky }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)

    if (menuIsOpen) {
      enableBodyScroll(document.querySelector('#mobileMenu'))
    } else {
      disableBodyScroll(document.querySelector('#mobileMenu'))
    }
  }

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      enableBodyScroll(document.querySelector('#mobileMenu'))
    })
  }, [])

  const { t } = useTranslation('common')

  return (
    <div className="relative z-50">
      <header
        className={`bg-white dark:bg-black ${
          sticky ? 'fixed left-0 right-0 top-0' : ''
        }`}
        id="header"
      >
        <div className="relative w-full px-4 md:px-6 lg:px-8">
          <div className="header flex items-center justify-between py-4 lg:py-6">
            <Link to="/">
              <VegaLogo />
            </Link>

            <div className="hidden lg:block">
              <Navigation />
            </div>

            <div className="flex items-center">
              {!menuIsOpen && (
                <GeorestrictedContext.Consumer>
                  {({ isGeorestricted }) => {
                    if (isGeorestricted) {
                      return null
                    }

                    return (
                      <HeaderCta
                        link="https://console.vega.xyz/"
                        text={t('Launch App')}
                        className="mr-3 hidden md:block lg:hidden"
                      />
                    )
                  }}
                </GeorestrictedContext.Consumer>
              )}

              <MobileMenu toggleMenu={toggleMenu} isOpen={menuIsOpen} />

              <div className="flex items-center">
                <ScreenMode />
                <MobileMenuButton open={menuIsOpen} toggleMenu={toggleMenu} />
                {!menuIsOpen && (
                  <GeorestrictedContext.Consumer>
                    {({ isGeorestricted }) => {
                      if (isGeorestricted) {
                        return null
                      }

                      return (
                        <HeaderCta
                          link="https://console.vega.xyz/"
                          text={t('Launch App')}
                          className="ml-3 hidden lg:block"
                        />
                      )
                    }}
                  </GeorestrictedContext.Consumer>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
