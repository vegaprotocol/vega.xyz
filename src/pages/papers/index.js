import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import PageHeader from '../../components/UI/PageHeader'
import Paper from '../../components/Paper'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const PapersPage = ({ data }) => {
  const { t } = useTranslation('page.papers')
  // t("How it works");
  // t("Implementations");
  return (
    <Layout>
      <Seo
        title={t('Papers')}
        description={t(
          'Check out the technical, economic and mathematical detail - and innovative thinking behind Vega.'
        )}
      />
      <Container dataCy={'main'}>
        <div className="pb-space-10 pt-space-6 lg:pt-space-10">
          <div className="mb-space-8 md:mb-space-10">
            <PageHeader title={t('Papers')} />
          </div>

          {data.allMarkdownRemark.group.map((group, idx) => (
            <div key={idx}>
              <div className="mb-space-10 grid grid-cols-12 md:mb-0">
                <div className="col-span-12 md:col-span-4">
                  <div className="mb-space-6 text-[2rem] leading-none md:sticky md:top-6 md:mb-0 md:pb-16 md:pr-12 md:text-[2.5rem]">
                    {t(group.fieldValue)}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <ol>
                    {group.edges.map((edge, idx) => {
                      return <Paper paper={edge.node} key={idx} />
                    })}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default PapersPage

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
        collection: { eq: "papers" }
        fields: { locale: { eq: $language } }
      }
      sort: {
        fields: [frontmatter___category, frontmatter___position]
        order: ASC
      }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
              description
              position
              category
              links {
                title
                link
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
