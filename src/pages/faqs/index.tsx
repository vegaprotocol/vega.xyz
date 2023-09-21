import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Accordion from '../../components/UI/Accordion/Accordion'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const FaqsPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.faqs')
  const [missingTranslations, setMissingTranslations] = useState(false)

  const accordionData = data.allMarkdownRemark.edges.map((edge) => ({
    title: edge.node.frontmatter.title,
    html: edge.node.html,
  }))

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('FAQs')}
        description={t(
          'Answering the most common community questions on Alpha Mainnet.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div data-cy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-9">
        <Container>
          <div className="mb-space-8 text-center md:mb-space-10 lg:mb-space-11">
            <h2 className="mb-space-4 text-[3.5rem] leading-none">
              <Trans t={t}>FAQs</Trans>
            </h2>
            <p className="body-l mx-auto max-w-[45rem] text-vega-light-300 dark:text-vega-dark-300">
              Answering the most common community questions on Alpha Mainnet.
              #FreeTheMarkets.
            </p>
          </div>
          <Accordion data={accordionData} />
          <div>
            Feedback 💡 If you have direct protocol or UI feedback this can be
            added to GitHub Discussions here, or for market-by-market/parameter
            changes, perhaps check out the governance process outlined here. For
            more general organisational questions, like the ones above, you are
            more than welcome to join the Vega Protocol Discord server and ask
            in the general channel. Moreover, if you think a point is missing
            from this FAQ feel free to suggest it here. Explore Vega and the
            future of finance
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default FaqsPage

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
    allMarkdownRemark(
      filter: {
        collection: { in: ["faqs"] }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          html
          collection
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
