import React from 'react'
import About from './items/About'
import Dropdown from './Dropdown'
import MainItem from './MainItem'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Navigation = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <nav>
      <ul className="text-lg tracking-wide lg:flex">
        <Dropdown title={t('About')} link="/papers/">
          <About />
        </Dropdown>
        <MainItem link="https://docs.vega.xyz/" text={t('Docs')} />
        <MainItem link="/developers" text={t('Developers')} />
        <MainItem
          link="https://discord.com/invite/3hQyGgZ"
          text={t('Discord')}
        />
      </ul>
    </nav>
  )
}

export default Navigation
