import React, { useState } from 'react'
import Community from './items/Community'
import Governance from './items/Governance'
import MobileDropdown from './MobileDropdown'
import { useTranslation } from 'gatsby-plugin-react-i18next'

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
          title={t('Community')}
          id={2}
          show={showId === 2}
          onShow={handleShow}
        >
          <Community />
        </MobileDropdown>
        <MobileDropdown
          title={t('Governance')}
          id={3}
          show={showId === 3}
          onShow={handleShow}
        >
          <Governance />
        </MobileDropdown>
      </ul>
    </nav>
  )
}

export default MobileNavigation
