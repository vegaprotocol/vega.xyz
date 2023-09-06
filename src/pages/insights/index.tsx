import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Tag from '../../components/UI/Tag'
import GlitchTitle from '../../components/UI/GlitchTitle'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NewsListItem from '../../components/UI/NewsListItem'
import Talk from '../../components/Talk'

const InsightsPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.insights')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Insights')}
        description={t('Articles about vega from around the web')}
      />
      {missingTranslations && <TranslationsBanner />}
      <div data-cy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container>
          <div className="mb-space-8 md:mb-space-10 lg:mb-space-11">
            <h1 className="mb-space-4">
              <Tag>
                <Trans t={t}>Latest news</Trans>
              </Tag>
            </h1>
            <h2 className="heading-xxl">
              <GlitchTitle color="red">
                <Trans t={t}>Insights</Trans>
              </GlitchTitle>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 md:gap-space-8">
            <div className="md:col-span-4">
              <h2 className="heading-l mb-space-6 md:mb-0">
                <Trans t={t}>Articles about vega from around the web</Trans>
              </h2>
            </div>

            <div className="md:col-span-8">
              {data.allMarkdownRemark.edges.map((content, idx) => (
                <div>
                  {content.node.collection === 'talks' ? (
                    <div>
                      <Talk key={idx} talk={content.node} />
                    </div>
                  ) : (
                    <NewsListItem
                      key={idx}
                      title={content.node.frontmatter.title}
                      date={content.node.frontmatter.date}
                      location={content.node.frontmatter.location}
                      image={
                        content.node.frontmatter.featuredImage?.childImageSharp
                          ?.gatsbyImageData
                      }
                      links={content.node.frontmatter.links}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: content.node.html }}
                      />
                    </NewsListItem>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

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
        collection: { in: ["insights", "talks"] }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          collection
          frontmatter {
            title
            date(formatString: "ll")
            location
            links {
              title
              link
              url
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 640)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default InsightsPage
