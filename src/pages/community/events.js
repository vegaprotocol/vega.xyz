import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import BoxTitle from '../../components/BoxTitle'
import Calendar from '../../components/Calendar'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Events = ({ data }) => {
  const { i18n, t } = useTranslation('page.community')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Events')}
        description={t(
          'Upcoming community events, meet-ups, research office hours and community calls.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-14 pt-6 lg:pt-16">
          <BoxTitle text={t('Community')} />
          <h1 className="title-m font-glitched md:title-l mt-4">
            <Trans t={t}>Upcoming events + meetups</Trans>
          </h1>
        </div>
        <div className="mb-space-8 md:mb-space-10">
          <Calendar />
        </div>
      </Container>
    </Layout>
  )
}

export default Events

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
