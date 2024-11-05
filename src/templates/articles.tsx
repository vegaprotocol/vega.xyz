import React from 'react'
import { graphql, Link } from 'gatsby'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NewsListItem from '../components/UI/NewsListItem'
import Talk from '../components/Talk'
import PageHeader from '../components/UI/PageHeader'

const ArticlesPage = ({ data, pageContext }) => {
  const { t } = useTranslation('page.articles')
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const firstItem = currentPage * 10 - 9
  const totalItems = data.allMarkdownRemark.totalCount
  const lastItem = isLast ? totalItems : firstItem + 9
  const prevPage =
    currentPage - 1 === 1 ? '/articles' : `/articles/${currentPage - 1}`
  const nextPage = `/articles/${currentPage + 1}`

  const Pagination = () => {
    return (
      <div className="body-l flex justify-between">
        {!isFirst ? (
          <>
            <div className="hidden md:block">
              <Link to={prevPage} rel="prev">
                ← <Trans t={t}>Previous Page</Trans>
              </Link>
            </div>
            <div className="md:hidden">
              <Link to={prevPage} rel="prev">
                ← <Trans t={t}>Previous</Trans>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="hidden opacity-50 md:block">
              ← <Trans t={t}>Previous Page</Trans>
            </div>
            <div className="opacity-50 md:hidden">
              ← <Trans t={t}>Previous</Trans>
            </div>
          </>
        )}
        <p className="body-l">
          <Trans t={t} values={{ currentPage, numPages, lastItem }}>
            {{ firstItem }} - {{ lastItem }} of {{ totalItems }}
          </Trans>
        </p>
        {!isLast ? (
          <Link to={nextPage} rel="next">
            <div className="hidden md:block">
              <Trans t={t}>Next Page</Trans> →
            </div>
            <div className="md:hidden">
              <Trans t={t}>Next</Trans> →
            </div>
          </Link>
        ) : (
          <div className="opacity-50">
            <div className="hidden md:block">
              <Trans t={t}>Next Page</Trans> →
            </div>
            <div className="md:hidden">
              <Trans t={t}>Next</Trans> →
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Layout>
      <Seo
        title={t('Articles & Talks')}
        description={t(
          'Articles about Vega and recordings of past talks, events and podcasts'
        )}
      />
      <div data-cy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container>
          <div className="mb-space-8 text-center md:mb-space-10 lg:mb-space-11">
            <PageHeader
              title={t('Articles & Talks')}
              description={t(
                'Articles about Vega and recordings of past talks, events and podcasts'
              )}
            />
          </div>

          <div className="pb-space-6">
            <Pagination />
          </div>

          <div className="grid border-t border-vega-light-200 pt-space-6 dark:border-vega-dark-200 md:grid-cols-12 md:gap-space-8">
            <div className="md:col-span-12">
              {data.allMarkdownRemark.edges.map((content, idx) => (
                <div key={idx}>
                  {content.node.collection === 'talks' ? (
                    <Talk
                      key={idx}
                      talk={content.node}
                      image={
                        content.node.frontmatter.featuredImage?.childImageSharp
                          ?.gatsbyImageData
                      }
                    />
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
        collection: { in: ["articles", "talks"] }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
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

export default ArticlesPage
