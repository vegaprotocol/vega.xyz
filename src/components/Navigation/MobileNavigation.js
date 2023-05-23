import React, { useState } from 'react'
import Use from './items/Use'
import Community from './items/Community'
import Governance from './items/Governance'
import Develop from './items/Develop'
import Learn from './items/Learn'
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
          title={t('Use Vega')}
          id={1}
          show={showId === 1}
          onShow={handleShow}
        >
          <Use />
        </MobileDropdown>
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
        <MobileDropdown
          title={t('Develop')}
          id={4}
          show={showId === 4}
          onShow={handleShow}
        >
          <Develop />
        </MobileDropdown>
        <MobileDropdown
          title={t('Learn')}
          id={5}
          show={showId === 5}
          onShow={handleShow}
        >
          <Learn />
        </MobileDropdown>
      </ul>
    </nav>
  )
}

export default MobileNavigation
