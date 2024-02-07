import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Contributor from '../../components/Contributor'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import PageHeader from '../../components/UI/PageHeader'

const Contributors = () => {
  const { i18n, t } = useTranslation('page.community')
  const [contributors, setContributors] = useState(null)
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  useEffect(() => {
    async function fetchContributors() {
      let response = await fetch(
        'https://github-contributors-service.ops.vega.xyz/contributors?sort=random'
      )
      response = await response.json()
      setContributors(response.github_contributors)
    }
    fetchContributors()
  }, [])

  return (
    <Layout>
      <Seo
        title="Contributors"
        description="Explore the people who have made Vega the exciting DeFi solution that it is."
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-14 pt-6 lg:pt-16">
          <div className="mx-auto mb-6 max-w-[21.25rem] text-center md:mb-12 md:max-w-[40rem] lg:max-w-[44rem]">
            <PageHeader title={t('Contributors')} />
          </div>

          <div className="mx-auto max-w-[42rem]">
            {contributors ? (
              <div
                className="grid grid-cols-4 gap-6 md:grid-cols-6"
                data-cy="contributors"
              >
                {contributors.map((contributor, idx) => {
                  return (
                    <Contributor
                      className=""
                      key={idx}
                      contributor={contributor}
                    />
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Contributors

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
