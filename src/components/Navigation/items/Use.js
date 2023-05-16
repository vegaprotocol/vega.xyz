import React from 'react'
import NavigationItem from '../Item'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NavigationHeading from '../Heading'

const Use = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <div className="gap-6 lg:grid lg:grid-cols-2">
      <div className="lg:col-span-1">
        <NavigationHeading>
          <Trans t={t}>Infrastructure</Trans>
        </NavigationHeading>

        <NavigationItem text={t('Use the network')} link="/use" />
        <NavigationItem text={t('Get the Vega Wallet')} link="/wallet" />
        <NavigationItem
          text={t('Validate and secure the network')}
          link="/validators"
        />
      </div>
      <div className="lg:col-span-1">
        <NavigationHeading>
          <Trans t={t}>Trading</Trans>
        </NavigationHeading>
        <NavigationItem
          text={t('Experiment on Fairground Testnet')}
          link="https://fairground.wtf"
        />
        <NavigationItem text={t('Liquidity Provision')} link="/markets" />
      </div>
    </div>
  )
}

export default Use
