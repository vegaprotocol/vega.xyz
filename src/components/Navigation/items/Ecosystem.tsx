import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Ecosystem = () => {
  const { t } = useTranslation('component.navigation')

  return (
    <NavigationList>
      <NavigationItem text={t('Ecosystem Home')} link="/ecosystem" />
      <NavigationItem text={t('Wallet')} link="/wallet" />
      <NavigationItem text={t('Developers')} link="/developers" />
      <NavigationItem
        text={t('Programmatic Trading')}
        link="/programmatic-trading"
      />
      <NavigationItem text={t('Validators')} link="/validators" />
    </NavigationList>
  )
}

export default Ecosystem
