import React from 'react'
import NavigationItem from '../Item'
import NavigationHeading from '../Heading'
import NavigationList from '../List'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Use = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <div className="gap-6 lg:grid lg:grid-cols-3">
      <div>
        <NavigationHeading>
          <Trans t={t}>Infrastructure</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t('Tools built on Vega')} link="/use" />
          <NavigationItem text={t('The Vega wallet')} link="/wallet" />
          <NavigationItem
            text={t('Validate and secure the network')}
            link="/validators"
          />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Trading</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t('Trade futures (Testnet)')}
            link="https://fairground.wtf/"
          />
          {/* <NavigationItem text={t('Liquidity opportunities')} link="" /> */}
          <NavigationItem
            text={t('Market make and provide liquidity using our APIs')}
            link="/market-making-and-liquidity-provision"
          />
        </NavigationList>
      </div>
    </div>
  )
}

export default Use
