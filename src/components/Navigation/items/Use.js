import React from 'react'
import NavigationItem from '../Item'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NavigationHeading from '../Heading'
import NavigationList from '../List'

const Use = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <ul className="gap-6 lg:grid lg:grid-cols-2">
      <div>
        <NavigationHeading>
          <Trans t={t}>Infrastructure</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t('Get the Vega Wallet')} link="/wallet" />
          <NavigationItem
            text={t('Validate and secure the network')}
            link="/validators"
          />
          <NavigationItem text={t('Rewards')} link="/rewards" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Trading</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t('Experiment on Fairground Testnet')}
            link="https://fairground.wtf"
          />
          <NavigationItem
            text={t('Liquidity Provision')}
            link="/liquidity-provision"
          />
          <NavigationItem
            text={t('Programmatic trading')}
            link="/programmatic-trading"
          />
        </NavigationList>
      </div>
    </ul>
  )
}

export default Use
