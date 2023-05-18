import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import NavigationHeading from '../Heading'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Markets = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <div className="gap-6 lg:grid lg:grid-cols-3">
      <div>
        <NavigationHeading>
          <Trans t={t}>Markets</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t('Markets and Liqudity')} link="/markets" />
        </NavigationList>
      </div>
    </div>
  )
}

export default Markets
