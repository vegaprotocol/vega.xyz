import React, { useState } from 'react'
import About from './items/About'
import MobileDropdown from './MobileDropdown'
import Link from '../../components/UI/Link'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const MobileNavigation = () => {
  const { t } = useTranslation('component.navigation')
  const [showId, setShowId] = useState()
  const handleShow = (id) => {
    if (id !== showId) {
      setShowId(id)
    } else {
      setShowId(-1)
    }
  }

  return (
    <nav>
      <ul className="w-full max-w-[40rem] py-4 text-lg tracking-wide">
        <MobileDropdown
          title={t('About')}
          id={1}
          show={showId === 1}
          onShow={handleShow}
        >
          <About />
        </MobileDropdown>
        <Link
          to="https://docs.vega.xyz/"
          className="font-not-glitched block py-3 text-[2.125rem] uppercase"
        >
          <Trans t={t}>Docs</Trans>
        </Link>
        <Link
          to="/developers"
          className="font-not-glitched block py-3 text-[2.125rem] uppercase"
        >
          <Trans t={t}>Developers</Trans>
        </Link>
        <Link
          to="https://discord.com/invite/3hQyGgZ"
          className="font-not-glitched block py-3 text-[2.125rem] uppercase"
        >
          <Trans t={t}>Docs</Trans>
        </Link>
      </ul>
    </nav>
  )
}

export default MobileNavigation
