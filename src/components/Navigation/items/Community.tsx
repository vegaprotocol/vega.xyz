import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Community = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <NavigationList>
      <NavigationItem text={t('Community Home')} link="/community/" />
      <NavigationItem text={t('Fairground')} link="https://fairground.wtf/" />
      <NavigationItem
        text={t('Discord')}
        link="https://discord.com/invite/3hQyGgZ"
      />
    </NavigationList>
  )
}

export default Community
