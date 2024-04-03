import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import PageHeader from '../../components/UI/PageHeader'
import Accordion from '../../components/UI/Accordion/Accordion'
import UniverseLeft from '../../components/Svg/UniverseLeft'
import UniverseRight from '../../components/Svg/UniverseRight'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const FaqsPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.faqs')
  const [missingTranslations, setMissingTranslations] = useState(false)

  const accordionData = data.allMarkdownRemark.edges.map((edge) => ({
    title: edge.node.frontmatter.title,
    html: edge.node.html,
  }))

  i18n.on('missingKey', (lng) => {
    i18n.language !== 'en' && setMissingTranslations(true)
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
      <div
        data-cy={'main'}
        className="relative pt-space-5 md:pt-space-6 lg:pt-space-9"
      >
        <div className="absolute top-20 left-0 hidden w-[15rem] xl:block">
          <UniverseLeft />
        </div>
        <div className="absolute bottom-20 right-0 hidden w-[15rem] xl:block ">
          <UniverseRight />
        </div>
        <Container>
          <div className="mb-space-8 text-center md:mb-space-10 lg:mb-space-11">
            <PageHeader
              title={t('FAQs')}
              description={t(
                'Answering the most common community questions on Alpha Mainnet.'
              )}
            />
          </div>
          <div className="mx-auto max-w-[48rem] pb-space-14">
            <Accordion data={accordionData} />
            <div className="prose max-w-none pt-space-8">
              <h2>Feedback 💡</h2>
              <p>
                <Trans t={t}>
                  If you have direct protocol or UI feedback this can be added
                  to GitHub Discussions{' '}
                  <a href="/papers/fairness.pdf" target="_blank">
                    here
                  </a>
                  , or for market-by-market/parameter changes, perhaps check out
                  the governance process outlined{' '}
                  <Link to="/governance/">here</Link>. For more general
                  organisational questions, like the ones above, you are more
                  than welcome to join the{' '}
                  <Link to="/discord">Vega Protocol Discord server</Link> and
                  ask in the general channel. Moreover, if you think a point is
                  missing from this FAQ feel free to suggest it{' '}
                  <a
                    href="https://www.notion.so/Blog-Post-Vega-Alpha-Mainnet-FAQs-f530338ed70b425a9c6e0ba64b4ffadd?pvs=21"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </Trans>
              </p>
            </div>
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
      sort: { fields: [fields___slug], order: ASC }
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
