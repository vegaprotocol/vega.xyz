import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { GeorestrictedContext } from '../../../context/georestricted'

const Ecosystem = () => {
  const { t } = useTranslation('component.navigation')

  return (
    <NavigationList>
      <NavigationItem text={t('Apps & Tools')} link="/apps" />
      <NavigationItem text={t('Wallet')} link="/wallet" />
      <NavigationItem text={t('Developers')} link="/developers" />
      <NavigationItem
        text={t('Programmatic Trading')}
        link="/programmatic-trading"
      />
      <GeorestrictedContext.Consumer>
        {({ isGeorestricted }) => {
          if (isGeorestricted) {
            return null
          }

          return (
            <NavigationItem
              id="liquidity-provision"
              text={t('Liquidity Provision')}
              link="/liquidity-provision"
            />
          )
        }}
      </GeorestrictedContext.Consumer>
      <NavigationItem text={t('Validators')} link="/validators" />
    </NavigationList>
  )
}

export default Ecosystem
