import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import Tag from '../../components/UI/Tag'
import Button from '../../components/UI/Button'
import GlitchTitle from '../../components/UI/GlitchTitle'
import TeamTile from '../../components/UI/TeamTile'
import InfoTile from '../../components/UI/InfoTile'
import Callout from '../../components/UI/Callout'
import Link from '../../components/UI/Link'
import ActionButton from '../../components/UI/ActionButton'
import APIGraphic from '../../components/Svg/APIGraphic'
import { getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import GRPC from '../../components/Svg/GRPC'
import REST from '../../components/Svg/REST'
import GraphQL from '../../components/Svg/GraphQL'
import CoreNodes from '../../components/RestAPI/CoreNodes'
import DataNodes from '../../components/RestAPI/DataNodes'
import VegaWallet from '../../components/RestAPI/VegaWallet'
import NetworkParameter from '../../components/NetworkParameter'

const ProgrammaticTrading = ({ data }) => {
  const { t, i18n } = useTranslation('page.programmatic-trading')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const MarketMakerText = () => {
    return (
      <Trans t={t}>
        Users who place static or pegged order limit volume on the book will
        receive{' '}
        <NetworkParameter
          param="market_fee_factors_makerFee"
          expressPercentage
          suffix="%"
        ></NetworkParameter>{' '}
        of the trade value when an incoming trade matches their order.
      </Trans>
    )
  }

  return (
    <Layout>
      <Seo
        title={t('Programmatic trading on Vega')}
        description={t(
          'Programmatic trading on Vega is enabled through rich CEX-style APIs for deployment of market making, liquidity provision, and directional trading strategies.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mx-auto mb-space-10 max-w-[60rem] pt-space-5 text-center md:mb-space-11 md:pt-space-6 lg:pt-space-7">
          <h1 className="mb-space-4 ">
            <Tag>
              <Trans t={t}>Use Vega</Trans>
            </Tag>
          </h1>
          <h2 className="heading-xl mb-space-5">
            <GlitchTitle color="purple">
              <Trans t={t}>Programmatic trading on Vega</Trans>
            </GlitchTitle>
          </h2>
          <div className="body-xl mx-auto max-w-[40rem]">
            <Trans t={t}>
              Enabled through rich CEX-style APIs for deployment of market
              making, liquidity provision, and directional trading strategies
            </Trans>
          </div>
        </div>

        <div className="mb-space-10 grid grid-cols-1 gap-space-4 md:mb-space-11 md:grid-cols-2 md:gap-space-7">
          <TeamTile
            title={t('Market makers')}
            body={<MarketMakerText />}
            image={getImage(data.iconMarketMaker)}
          />
          <TeamTile
            title={t('Liquidity providers')}
            body={
              <div>
                {t(
                  "Users willing to commit a set bond amount to help ensure a market's liquidity additionally earn a liquidity provision fee set per market."
                )}{' '}
                <Link
                  className="text-vega-black underline hover:no-underline dark:text-vega-white"
                  to="https://docs.vega.xyz/testnet/concepts/liquidity/provision"
                >
                  Learn more
                </Link>
              </div>
            }
            image={getImage(data.iconLiquidityProvider)}
          />
        </div>

        <h2 className="heading-xl my-space-10 text-center md:my-space-11 lg:my-space-13">
          <GlitchTitle color="purple">
            <Trans t={t}>Starter kit</Trans>
          </GlitchTitle>
        </h2>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="heading-m mb-space-4">
            <Trans t={t}>1. Pre-requisites</Trans>
          </h3>

          <p className="body-l mb-space-6 max-w-[38rem] md:mb-space-8">
            <Trans t={t}>
              Market making and liquidity provision is risky and for
              sophisticated parties only. Users of this page should be able to:
            </Trans>
          </p>

          <div className="prose-lg -mb-space-6 grid max-w-none grid-cols-1 gap-x-space-6 prose-p:mt-0 prose-p:text-vega-light-400 dark:prose-p:text-vega-dark-400 md:grid-cols-3 md:gap-y-space-4 xl:gap-x-space-10">
            <p>
              <Trans t={t}>
                i. Actively manage liquidity deployed to a limit order book
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                ii. Understand how derivatives pricing works, specifically
                cash-settle futures
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                iii. Code automated trading strategies and operate and monitor
                them 24/7
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                iv. Understand the nuances of integrating with a blockchain
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                v. Manage inventory risk and build trading strategies that
                manage exposure to maintain neutrality
              </Trans>
            </p>
            <p>
              <Trans t={t}>
                vi. Manage risk effectively in a leveraged trading environment
              </Trans>
            </p>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="heading-m mb-space-4">
            <Trans t={t}>2. Vega Wallet</Trans>
          </h3>

          <p className="body-xl mb-space-4">
            <Trans t={t}>
              Download the CLI wallet for developer access to programmatically
              sign transactions and access any dApps on the network.
            </Trans>
          </p>

          <Button
            className="mb-space-6"
            to="https://docs.vega.xyz/mainnet/tools/vega-wallet/cli-wallet/latest/create-wallet"
          >
            <Trans t={t}>Download CLI Wallet</Trans>
          </Button>

          <Callout
            title={t('Advanced: Set up your own test network')}
            subtitle={t(
              'Experiment with the protocol by creating an instance of the Vega network on your computer.'
            )}
            link="https://github.com/vegaprotocol/vegacapsule#readme"
            linkText={t('Install Vega capsule')}
          ></Callout>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
            <div>
              <h3 className="heading-m mb-space-3">
                <Trans t={t}>3. Explore the APIs</Trans>
              </h3>
            </div>
            <APIGraphic className="w-full max-w-[16rem] self-end" />
          </div>

          <div className="grid grid-cols-1 gap-space-8 py-space-6 md:grid-cols-3">
            <div>
              <h2 className="heading-s mb-space-5">
                <Trans t={t}>Core nodes</Trans>
              </h2>
              <CoreNodes />
              <Button
                className="mt-space-5"
                variant="secondary"
                to="https://docs.vega.xyz/mainnet/category/api/rest/core/core-service"
              >
                <Trans t={t}>View all core node APIs</Trans>
              </Button>
            </div>
            <div>
              <h2 className="heading-s mb-space-5">
                <Trans t={t}>Data node</Trans>
              </h2>
              <DataNodes />
              <Button
                className="mt-space-5"
                variant="secondary"
                to="https://docs.vega.xyz/mainnet/api/rest/overview"
              >
                <Trans t={t}>View all data node APIs</Trans>
              </Button>
            </div>
            <div>
              <h2 className="heading-s mb-space-5">
                <Trans t={t}>Vega wallet</Trans>
              </h2>
              <VegaWallet />
              <Button
                className="mt-space-5"
                variant="secondary"
                to="https://docs.vega.xyz/mainnet/concepts/vega-wallet"
              >
                <Trans t={t}>View Vega Wallet API</Trans>
              </Button>
            </div>
          </div>

          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <div className="mt-space-6 mb-space-6 mb-space-10 flex items-center gap-x-10">
              <div className="heading-s">
                <Trans t={t}>Accessed via:</Trans>
              </div>
              <GRPC />
              <REST />
              <GraphQL />
            </div>

            <Button to="https://docs.vega.xyz/mainnet/api/overview">
              <Trans t={t}>Integrate with the APIs</Trans>
            </Button>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="heading-m mb-space-8">
            <Trans t={t}>4. Tutorials and code snippets</Trans>
          </h3>

          <div className="grid grid-cols-1 gap-space-4 md:grid-cols-4 md:gap-space-7">
            <InfoTile
              title={t('Getting started')}
              link={{
                to: 'https://docs.vega.xyz/mainnet/tutorials/building-a-bot/getting-started',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4">
                <p>
                  <Trans t={t}>
                    Start development of a bot to trade on Vega
                  </Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Streaming data')}
              link={{
                to: 'https://docs.vega.xyz/mainnet/tutorials/building-a-bot/streaming-data',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4">
                <p>
                  <Trans t={t}>Enhance the bot with a data stream</Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Adding a liquidity commitment')}
              link={{
                to: 'https://docs.vega.xyz/mainnet/tutorials/building-a-bot/adding-a-liquidity-commitment',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4">
                <p>
                  <Trans t={t}>Add a liquidity commitment to the bot</Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Adding an external price feed')}
              link={{
                to: 'https://docs.vega.xyz/mainnet/tutorials/building-a-bot/adding-an-external-price',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4">
                <p>
                  <Trans t={t}>Add an external price feed to the bot</Trans>
                </p>
              </div>
            </InfoTile>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 md:grid-cols-2 lg:mb-space-14">
          <h2 className="heading-l mb-space-6 text-center md:mb-space-8 lg:mb-space-10">
            <Trans t={t}>Key Resources</Trans>
          </h2>

          <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-space-7">
            <ActionButton to="https://docs.vega.xyz/mainnet/concepts/trading-on-vega/market-lifecycle">
              <Trans t={t}>Vega market lifecycle</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/mainnet/concepts/trading-on-vega/trading-modes">
              <Trans t={t}>Vega trading modes</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/mainnet/concepts/trading-on-vega/fees-rewards#">
              <Trans t={t}>Fees & trading rewards</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/mainnet/concepts/liquidity/provision">
              <Trans t={t}>Providing liquidity</Trans>
            </ActionButton>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default ProgrammaticTrading

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
    iconMarketMaker: file(relativePath: { eq: "market-maker-icon.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconLiquidityProvider: file(
      relativePath: { eq: "liquidity-provider-icon.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
