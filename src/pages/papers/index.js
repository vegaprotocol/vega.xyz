import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import BoxTitle from '../../components/BoxTitle'
import GlitchTitle from '../../components/GlitchTitle'
import Paper from '../../components/Paper'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const PapersPage = ({ data }) => {
  const { t } = useTranslation('page.talks')
  // t("How it works");
  // t("Implementations");
  return (
    <Layout>
      <Seo
        title={t('Papers & Research')}
        description={t(
          'Check out the technical, economic and mathematical detail - and innovative thinking behind Vega.'
        )}
      />
      <Container dataCy={'main'}>
        <div className="pt-6 pb-space-10">
          <div className="mb-6 md:mb-16">
            <div className="mb-3">
              <BoxTitle text="Learn " />
            </div>
            <GlitchTitle
              level="1"
              className="title-l md:title-xxl lg:title-xxxl mb-16"
            >
              <Trans t={t}>Papers</Trans>
            </GlitchTitle>
          </div>

          {data.allMarkdownRemark.group.map((group, idx) => (
            <div key={idx}>
              <div className="mb-space-10 grid grid-cols-12 md:mb-0">
                <div className="col-span-12 md:col-span-4">
                  <div className="title-m md:title-s xl:title-m mb-12 md:sticky md:top-6 md:mb-0 md:pr-12 md:pb-16">
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
      filter: { collection: { eq: "papers" } }
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
