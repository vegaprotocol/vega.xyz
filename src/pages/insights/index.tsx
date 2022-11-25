import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NewsListItem from '../../components/UI/NewsListItem'

const InsightsPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.insights')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  console.log(data.allMarkdownRemark.edges[0].node.frontmatter.featuredImage)

  return (
    <Layout>
      <Seo
        title={t('Insights')}
        description={t('Articles about vega from around the web')}
      />
      {missingTranslations && <TranslationsBanner />}
      <div dataCy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container>
          <div className="grid grid-cols-12 gap-space-8">
            <div className="col-span-4">
              <h2 className="heading-l">
                Articles about vega from around the web
              </h2>
            </div>

            <div className="col-span-8">
              {data.allMarkdownRemark.edges.map((insight, idx) => (
                <NewsListItem
                  key={idx}
                  title={insight.node.frontmatter.title}
                  date={insight.node.frontmatter.date}
                  image={
                    insight.node.frontmatter.featuredImage?.childImageSharp
                      ?.gatsbyImageData
                  }
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: insight.node.html }}
                  />
                </NewsListItem>
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
      filter: { collection: { eq: "insights" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "ll")
            location
            links {
              title
              link
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
