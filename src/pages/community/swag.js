import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'

import Container from '../../components/Container'
import ButtonLink from '../../components/ButtonLink'
import BoxTitle from '../../components/BoxTitle'
import { StaticImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Events = ({ data }) => {
  const { i18n, t } = useTranslation('page.community.swag')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    i18n.language !== 'en' && setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Swag')}
        description={t('Find out how to get your hands on Vega swag')}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-14 grid grid-cols-12 pt-16">
          <div className="relative z-10 col-span-12 -mt-6 self-center md:col-span-5 md:mt-0">
            <BoxTitle text="Community" />
            <h1 className="title-l title-xxl lg:title-xxxl xl:title-xxxxl mt-4">
              <Trans t={t}>Want Swag?</Trans>
            </h1>
            <div className="copy-s mt-4 !mb-6">
              <Trans t={t}>Get your hands on it here</Trans>
            </div>
            <ButtonLink
              link="https://vega.xyz/discord"
              text="Ask us on Discord"
            />
          </div>
          <div className="col-span-12 pt-16 text-center md:col-span-7 md:pt-0">
            <StaticImage
              src="../../images/vega-swag.png"
              alt="Vega Swag"
              placeholder="none"
              layout="constrained"
              width={520}
              height={584}
            />
          </div>
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
