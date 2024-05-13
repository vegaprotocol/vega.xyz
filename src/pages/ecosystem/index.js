import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import TranslationsBanner from '../../components/TranslationsBanner'
import PageHeader from '../../components/UI/PageHeader'
import Callout from '../../components/UI/Callout'
import SectionScrollButton from '../../components/UI/SectionScrollButton/SectionScrollButton'
import Fairground from '../../components/Fairground'
import ToolBox from '../../components/ToolBox'
import { getImage } from 'gatsby-plugin-image'
import AddGraphic from '../../components/Svg/Use/Add/Add'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { useEcosystemData } from '../../hooks/use-ecosystem-data'

const EcosystemPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.ecosystem')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const tabs = useRef(null)
  const [filter, setFilter] = useState(null)

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  i18n.on('missingKey', (lng) => {
    i18n.language !== 'en' && setMissingTranslations(true)
  })

  useEffect(() => {
    if (filter) {
      for (let el of tabs.current.children) {
        el.classList.add('hidden')
      }

      tabs.current
        .querySelectorAll(`div.${filter}`)
        .forEach((el) => el.classList.remove('hidden'))
    } else {
      for (let el of tabs.current.children) {
        el.classList.remove('hidden')
      }
    }
  }, [filter, tabs])

  // t('integrations')
  // t('wallets')
  // t('dapps')
  // t('validators')
  // t('build')
  // t('analytics')

  const ecosystemData = useEcosystemData(t)
  // keep the first 3 wallets at the top
  const wallets = ecosystemData.slice(0, 3)
  // alphabetically sort the rest
  const sortedEcosystemData = ecosystemData.slice(3).sort((a, b) => {
    return a.title.localeCompare(b.title)
  })
  const ecosystemItems = wallets.concat(sortedEcosystemData)

  return (
    <Layout>
      <Seo
        title={t('Ecosystem')}
        description={t(
          'Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-space-10 pt-6 text-center md:mb-12 md:pt-16">
          <div className="mx-auto max-w-[61rem] text-center">
            <PageHeader
              title={t('Ecosystem')}
              description={t(
                'Anyone can build tools on Vega, this page provides easy access to all tools built and registered with the project team. Project team owned tools that cover the key functions of the network are marked as "Made by Vega".'
              )}
            />
          </div>
        </div>
        <div className="mx-auto max-w-[90rem] md:px-6 lg:px-8">
          <div className="mx-auto flex gap-space-4 overflow-x-auto overflow-y-hidden whitespace-nowrap px-6 text-center md:flex-wrap md:justify-center lg:overflow-y-auto lg:whitespace-normal">
            <button
              tabIndex={0}
              onClick={() => changeFilter(null)}
              className={`inline-block shrink-0 ${
                filter === null ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>All</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('integrations')}
              className={`inline-block shrink-0 ${
                filter === 'integrations' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>Integrations</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('wallets')}
              className={`inline-block shrink-0 ${
                filter === 'wallets' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>Wallets</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('dapps')}
              className={`inline-block shrink-0 ${
                filter === 'dapps' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>dApps</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('analytics')}
              className={`inline-block shrink-0 ${
                filter === 'analytics' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>Analytics</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('validators')}
              className={`inline-block shrink-0 ${
                filter === 'validators' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>Validators</Trans>
              </SectionScrollButton>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('build')}
              className={`inline-block shrink-0 ${
                filter === 'build' ? 'active-section-scroll-button' : ''
              }`}
            >
              <SectionScrollButton>
                <Trans t={t}>Build on Vega</Trans>
              </SectionScrollButton>
            </button>
          </div>
        </div>
        {filter === 'integrations' && (
          <Callout
            className="mt-space-8 text-center"
            subtitle={t(
              'Integrations do not necessarily imply any official partnership or relationship between Vega Protocol and the integration listed'
            )}
          />
        )}
        <div
          className="grid grid-cols-1 gap-4 py-space-8 md:mb-12 md:grid-cols-2 md:gap-6 md:py-space-10 lg:grid-cols-3 lg:gap-10"
          ref={tabs}
        >
          {ecosystemItems.map((tool, idx) => (
            <div
              className={`${tool.categories.join(
                ' '
              )} mx-auto w-full max-w-[26rem] md:max-w-none ${
                tool.className || ''
              }`}
              key={idx}
            >
              <ToolBox
                icon={getImage(tool.icon)}
                title={tool.title}
                link={tool.link}
                author={tool.author}
                text={tool.description}
                categories={tool.categories.map((category) => t(category))}
              />
            </div>
          ))}
        </div>
        <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
          <div>
            <p className="mb-space-2 text-[2rem] leading-none">
              <Trans t={t}>Want to add something to this list?</Trans>
            </p>
            <p className="copy-s prose text-vega-mid-grey">
              <Trans t={t}>
                <a
                  href="https://vega.xyz/discord"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to us on Discord
                </a>{' '}
                and <Link to="/developers">start building</Link>.
              </Trans>
            </p>
          </div>
          <AddGraphic className="w-full max-w-[16rem] self-end" />
        </div>
      </Container>

      <div className="mt-16">
        <Fairground />
      </div>
    </Layout>
  )
}

export default EcosystemPage

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
