import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Governance = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <NavigationList>
      <NavigationItem text={t('Governance Home')} link="/governance" />
      <NavigationItem
        text={t('Governance Forums')}
        link="https://community.vega.xyz/c/governance/25"
      />
      <NavigationItem
        text={t('Stake & Vote')}
        link="https://governance.vega.xyz/proposals"
      />
    </NavigationList>
  )
}

export default Governance
