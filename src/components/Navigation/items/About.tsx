import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const About = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <NavigationList>
      <NavigationItem text={t('Key Concepts')} link="/key-concepts/" />
      <NavigationItem text={t('Vega Papers')} link="/papers/" />
      <NavigationItem text={t('FAQs')} link="/" />
      <NavigationItem text={t('Insights & Talks')} link="/insights/" />
      <NavigationItem text={t('Blog')} link="https://blog.vega.xyz" />
    </NavigationList>
  )
}

export default About
