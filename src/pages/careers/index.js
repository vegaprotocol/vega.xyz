import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { graphql } from 'gatsby'
import BoxTitle from '../../components/BoxTitle'
import Planets from '../../components/Svg/Planets'
import Seo from '../../components/Seo'
import TranslationsBanner from '../../components/TranslationsBanner'
import CareerItem from '../../components/CareerItem'
import LeadingLine from '../../components/LeadingLine'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const CareersPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.careers')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Careers at Vega')}
        description={t(
          "Find your career in DeFi. Join the core team at Vega, and help create Web3's native derivatives layer."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div className="mb-16">
        <Container dataCy={'main'}>
          <div className="mb-space-10 pt-6 lg:pt-16">
            <div className="grid grid-cols-12">
              <div className="relative z-10 col-span-12 col-start-1 row-span-full">
                <h1>
                  <BoxTitle text="Careers" />
                </h1>
                <div className="title-l md:title-xxl lg:title-xxxl xl:title-xxxl mb-6 mt-4 max-w-[18.75rem] md:max-w-[36rem] lg:max-w-[44rem]">
                  <Trans t={t}>Your career in Defi starts here</Trans>
                </div>

                <div className="md:max-w-[60%] lg:max-w-[50%]">
                  <div className="copy-s mb-space-6 text-white">
                    <Trans t={t}>
                      Join the core team and work on the Vega project.
                    </Trans>
                  </div>
                  <p className="copy-xs">
                    <Trans t={t}>
                      Community at Vega starts with our global team. We're a
                      fast-growing, collaborative, and multi-disciplinary team,
                      learning from each other and setting our sights on solving
                      complex challenges. If you believe in the power of
                      decentralisation and want to change the world of finance,
                      this is your chance.
                    </Trans>
                  </p>
                  {data.allMarkdownRemark.edges.length === 0 ? (
                    <LeadingLine className="mt-space-6 text-white">
                      <Trans t={t}>
                        We don't currently have any open job roles.
                      </Trans>
                    </LeadingLine>
                  ) : null}
                </div>
              </div>
              <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
                <div className="translate-x-4 md:translate-x-6 lg:translate-x-8">
                  <Planets />
                </div>
              </div>
            </div>
          </div>

          {data.allMarkdownRemark.edges.length > 0 ? (
            <div className="grey-box mt-8 bg-vega-light-grey p-8 dark:bg-vega-box-grey dark:text-white md:mt-20">
              <h3 className="mb-6 text-[2.125rem] uppercase leading-[0.85] lg:text-[3.375rem]">
                <Trans t={t}>Open Jobs</Trans>{' '}
                <span className="text-vega-mid-grey">
                  ({data.allMarkdownRemark.edges.length})
                </span>
              </h3>
              <ol className="border-t border-current">
                {data.allMarkdownRemark.edges.map((edge, idx) => {
                  return <CareerItem key={idx} career={edge.node} />
                })}
              </ol>
            </div>
          ) : null}
        </Container>
      </div>
    </Layout>
  )
}

export default CareersPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMarkdownRemark(filter: { collection: { eq: "jobs" } }) {
      edges {
        node {
          collection
          frontmatter {
            title
            description
            start_date
            location
            contract_type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
