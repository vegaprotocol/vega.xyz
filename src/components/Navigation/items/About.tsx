import React from 'react'
import NavigationItem from '../Item'
import NavigationList from '../List'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const About = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <NavigationList>
      <NavigationItem text={t('Key Concepts')} link="/key-concepts/" />
      <NavigationItem text={t('Papers')} link="/papers/" />
      <NavigationItem text={t('FAQs')} link="/faqs" />
      <NavigationItem text={t('Articles & Talks')} link="/articles/" />
      <NavigationItem text={t('Blog')} link="https://blog.vega.xyz" />
    </NavigationList>
  )
}

export default About
