import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import TranslationsBanner from '../components/TranslationsBanner'
import Container from '../components/Container'
import Tag from '../components/UI/Tag'
import GlitchTitle from '../components/UI/GlitchTitle'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NewsListItem from '../components/UI/NewsListItem'
import Talk from '../components/Talk'

const InsightsPage = ({ data, pageContext }) => {
  const { i18n, t } = useTranslation('page.insights')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/insights' : `/insights/${currentPage - 1}`
  const nextPage = `/insights/${currentPage + 1}`

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const Pagination = () => {
    return (
      <div className="body-l flex justify-between">
        {!isFirst ? (
          <Link to={prevPage} rel="prev">
            ← <Trans t={t}>Previous Page</Trans>
          </Link>
        ) : (
          <div className="opacity-50">
            ← <Trans t={t}>Previous Page</Trans>
          </div>
        )}
        <p className="body-l">
          <Trans t={t} values={{ currentPage, numPages }}>
            Page {{ currentPage }} of {{ numPages }}
          </Trans>
        </p>
        {!isLast ? (
          <Link to={nextPage} rel="next">
            <Trans t={t}>Next Page</Trans> →
          </Link>
        ) : (
          <div className="opacity-50">
            <Trans t={t}>Next Page</Trans> →
          </div>
        )}
      </div>
    )
  }

  return (
    <Layout>
      <Seo
        title={t('Insights & Talks')}
        description={t('Articles and talks about vega')}
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
            <h2 className="heading-xl mb-space-2">
              <GlitchTitle color="red">
                <Trans t={t}>Insights & Talks</Trans>
              </GlitchTitle>
            </h2>
          </div>

          <div className="pb-space-6">
            <Pagination />
          </div>

          <div className="grid border-t border-vega-light-200 pt-space-6 dark:border-vega-dark-200 md:grid-cols-12 md:gap-space-8">
            <div className="md:col-span-12">
              {data.allMarkdownRemark.edges.map((content, idx) => (
                <div key={idx}>
                  {content.node.collection === 'talks' ? (
                    <Talk key={idx} talk={content.node} />
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
              <div className="pb-space-10">
                <Pagination />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!, $skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
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
