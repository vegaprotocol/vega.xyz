import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import TranslationsBanner from '../../components/TranslationsBanner'
import PageHeader from '../../components/UI/PageHeader'
import Callout from '../../components/UI/Callout'
import Fairground from '../../components/Fairground'
import ToolBox from '../../components/ToolBox'
import { getImage } from 'gatsby-plugin-image'
import AddGraphic from '../../components/Svg/Use/Add/Add'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const AppsAndToolsPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.apps')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const tabs = useRef(null)
  const [filter, setFilter] = useState(null)

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
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

  // t('wallets')
  // t('governance')
  // t('staking')
  // t('trading')
  // t('network')

  const tools = [
    {
      collection: 'tools',
      icon: data.walletIcon,
      title: t('Vega Wallet'),
      author: 'Vega',
      link: '/wallet/',
      description: t(
        'Connect to Vega dApps and sign transactions from your browser on the Vega network.'
      ),
      categories: ['wallets', 'governance', 'staking', 'trading'],
    },
    {
      collection: 'tools',
      icon: data.desktopWalletIcon,
      title: t('Desktop Wallet'),
      author: 'Vega',
      link: '/wallet/',
      description: t(
        'An easy to use Desktop Wallet app. Manage multiple wallets, multiple keys — and get access to the Vega network.'
      ),
      categories: ['wallets', 'governance', 'staking', 'trading'],
    },
    {
      collection: 'tools',
      icon: data.cliWalletIcon,
      title: t('CLI Wallet'),
      author: 'Vega',
      link: 'https://docs.vega.xyz/mainnet/tools/vega-wallet/cli-wallet',
      description: t(
        'Non-visual, command line wallet app with the ability to customise key details, isolate keys and build & send commands.'
      ),
      categories: ['wallets'],
    },
    {
      collection: 'tools',
      icon: data.consoleIcon,
      className: 'restricted-link',
      title: t('Console'),
      author: 'Vega',
      link: 'https://console.vega.xyz/',
      description: t(
        'A dApp for trading cash settled futures and perps on the fully decentralised Vega network.'
      ),
      categories: ['trading'],
    },
    {
      collection: 'tools',
      icon: data.governanceIcon,
      title: t('Governance'),
      author: 'Vega',
      link: 'https://governance.vega.xyz/proposals',
      description: t('Review and vote on governance proposals.'),
      categories: ['governance'],
    },
    {
      collection: 'tools',
      icon: data.blockExplorerIcon,
      title: t('Block Explorer'),
      author: 'Vega',
      link: 'https://explorer.vega.xyz/',
      description: t(
        'Dashboard with real-time information about the Vega blockchain.'
      ),
      categories: ['network'],
    },
    {
      collection: 'tools',
      icon: data.stakingIcon,
      title: t('Staking'),
      author: 'Vega',
      link: 'https://governance.vega.xyz/validators',
      description: t('Stake $VEGA tokens and get rewarded.'),
      categories: ['governance', 'staking'],
    },
    {
      collection: 'tools',
      icon: data.guidesIcon,
      title: t('Guides'),
      author: 'Vega Community',
      link: 'https://docs.vega.xyz/mainnet/tutorials/community-created',
      description: '',
      categories: [],
    },
    {
      collection: 'tools',
      icon: data.nodesGuruIcon,
      title: t('Vega World'),
      author: 'Nodes Guru',
      link: 'https://stake.nodes.guru/vega/world',
      description: t(
        'Data around validators, staking and rewards past and present.'
      ),
      categories: ['staking'],
    },
    {
      collection: 'tools',
      icon: data.vestingIcon,
      title: t('Vesting'),
      author: 'Vega',
      link: 'https://governance.vega.xyz/token/redeem',
      description: t('Redeem locked vega tokens.'),
      categories: [],
    },
    {
      collection: 'tools',
      icon: data.dataNodeIcon,
      title: t('Data Node'),
      author: 'Vega',
      link: 'https://github.com/vegaprotocol/vega/tree/develop/datanode#data-node',
      description: t('Query the Vega network APIs to retrieve on chain data.'),
      categories: ['network'],
    },
    {
      collection: 'tools',
      icon: data.vegaCapsuleIcon,
      title: t('Vega Capsule'),
      author: 'Vega',
      link: 'https://github.com/vegaprotocol/vegacapsule',
      description: t(
        'Use Vega Capsule to create an instance of the Vega network on your computer to experiment with using the protocol.'
      ),
      categories: ['trading'],
    },
    {
      collection: 'tools',
      icon: data.vegaValidatorsIcon,
      title: t('Vega Validators and Delegators'),
      author: 'XPRV',
      link: 'https://xprv-0.github.io/',
      description: t('Validators performance scores in a given Epoch.'),
      categories: ['staking'],
    },
  ]

  return (
    <Layout>
      <Seo
        title={t('Apps and Tools')}
        description={t(
          'Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-8 pt-6 text-center md:mb-12 md:pt-16">
          <div className="mx-auto max-w-[61rem] text-center">
            <PageHeader
              title={t('Apps and Tools')}
              description={t(
                'Anyone can build tools on Vega, this page provides easy access to all tools built and registered with the project team. Project team owned tools that cover the key functions of the network are marked as "Made by Vega".'
              )}
            />
          </div>
        </div>
        <div className="mx-auto max-w-[90rem] md:px-6 lg:px-8">
          <div className="mx-auto overflow-x-auto overflow-y-hidden whitespace-nowrap border-b border-vega-mid-grey px-6 text-center md:flex md:justify-center md:gap-x-8 md:whitespace-normal">
            <button
              tabIndex={0}
              onClick={() => changeFilter(null)}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === null
                  ? 'border-current'
                  : 'border-transparent hover:border-current'
              }`}
            >
              <Trans t={t}>All</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('wallets')}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === 'wallets'
                  ? 'border-current'
                  : 'over:border-current border-transparent'
              }`}
            >
              <Trans t={t}>Wallets</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('governance')}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === 'governance'
                  ? 'border-current'
                  : 'border-transparent hover:border-current'
              }`}
            >
              <Trans t={t}>Governance</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('staking')}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === 'staking'
                  ? 'border-current'
                  : 'border-transparent hover:border-current'
              }`}
            >
              <Trans t={t}>Staking</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('trading')}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === 'trading'
                  ? 'border-current'
                  : 'border-transparent hover:border-current'
              }`}
            >
              <Trans t={t}>Trading</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter('network')}
              className={`title-s inline-block border-b-2 px-3 py-5 ${
                filter === 'network'
                  ? 'border-current'
                  : 'border-transparent hover:border-current'
              }`}
            >
              <Trans t={t}>Network</Trans>
            </button>
          </div>
        </div>
        {filter === 'governance' && (
          <Callout
            className="mt-space-8"
            title={t('Vega is governed by its token holders')}
            subtitle={t(
              'Token holders propose changes, vote on proposals, create markets, and support validators by staking'
            )}
            link="/governance"
            linkText={t('Learn more')}
          />
        )}
        <div
          className="grid grid-cols-1 gap-4 py-16 md:mb-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10"
          ref={tabs}
        >
          {tools.map((tool, idx) => (
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
            <p className="title-m mb-3">
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

export default AppsAndToolsPage

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
    walletIcon: file(relativePath: { eq: "tool-icons/wallet.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    desktopWalletIcon: file(
      relativePath: { eq: "tool-icons/desktop-wallet.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    consoleIcon: file(relativePath: { eq: "tool-icons/console.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    governanceIcon: file(relativePath: { eq: "tool-icons/governance.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    blockExplorerIcon: file(
      relativePath: { eq: "tool-icons/block-explorer.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    stakingIcon: file(relativePath: { eq: "tool-icons/staking.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    cliWalletIcon: file(relativePath: { eq: "tool-icons/cli-wallet.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    nodesGuruIcon: file(relativePath: { eq: "tool-icons/nodes-guru.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vestingIcon: file(relativePath: { eq: "tool-icons/vesting.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    dataNodeIcon: file(relativePath: { eq: "tool-icons/data-node.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    guidesIcon: file(relativePath: { eq: "tool-icons/guides.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vegaCapsuleIcon: file(relativePath: { eq: "tool-icons/vega-capsule.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vegaValidatorsIcon: file(
      relativePath: { eq: "tool-icons/vega-validators.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
