import React from 'react'
import Use from './items/Use'
import Community from './items/Community'
import Governance from './items/Governance'
import Develop from './items/Develop'
import Learn from './items/Learn'
import Markets from './items/Markets'
import Dropdown from './Dropdown'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Navigation = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <nav>
      <ul className="text-lg tracking-wide lg:flex">
        <Dropdown title={t('Use Vega')}>
          <Use />
        </Dropdown>
        <Dropdown title={t('Community')}>
          <Community />
        </Dropdown>
        <Dropdown title={t('Governance')}>
          <Governance />
        </Dropdown>
        <Dropdown title={t('Develop')}>
          <Develop />
        </Dropdown>
        <Dropdown title={t('Learn')}>
          <Learn />
        </Dropdown>
        <Dropdown title={t('Markets')}>
          <Markets />
        </Dropdown>
      </ul>
    </nav>
  )
}

export default Navigation
