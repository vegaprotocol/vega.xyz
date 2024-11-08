import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import TeamTile from '../../components/UI/TeamTile'
import InfoTile from '../../components/UI/InfoTile'
import PageHeader from '../../components/UI/PageHeader'
import Link from '../../components/UI/Link'
import ActionButton from '../../components/UI/ActionButton'
import { getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Button from '../../components/UI/Button'

const ProgrammaticTrading = ({ data }) => {
  const { t } = useTranslation('page.programmatic-trading')
  const MarketMakerText = () => {
    return (
      <Trans t={t}>
        The protocol can reward users for consistently placing volume on the book, and for engaging with markets by trading
      </Trans>
    )
  }

  return (
    <Layout>
      <Seo
        title={t('Programmatic Trading')}
        description={t(
          'The Vega protocol supports programmatic trading with rich CEX-style APIs that can be used to develop market making, liquidity provision, and directional trading strategies.'
        )}
      />
      <Container dataCy={'main'}>
        <div className="mx-auto mb-space-10 max-w-[60rem] pt-space-5 text-center md:mb-space-11 md:pt-space-6 lg:pt-space-10">
          <PageHeader
            title={t('Programmatic Trading')}
            description={t(
              'Enabled through rich CEX-style APIs for development of market making, liquidity provision, and directional trading strategies'
            )}
          />
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
                  "The protocool can be configured to reward users who ccommit to meeting a liquidity \"SLA\" with a share of fees and optionally additional token or stablecoin rewards."
                )}{' '}
                <Link
                  className="text-vega-black underline hover:no-underline dark:text-vega-white"
                  to="https://docs.vega.xyz/release/concepts/liquidity/provision"
                >
                  Learn more
                </Link>
              </div>
            }
            image={getImage(data.iconLiquidityProvider)}
          />
        </div>

        <h2 className="mb-space-6 mt-space-10 text-center text-[2.5rem] leading-none md:mb-space-10 md:mt-space-11 md:text-[3.5rem] lg:mt-space-13">
          <Trans t={t}>Starter kit</Trans>
        </h2>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="mb-space-4 text-[2rem] leading-none">
            <Trans t={t}>1. Pre-requisites</Trans>
          </h3>

          <p className="body-l mb-space-6 max-w-[38rem] md:mb-space-8">
            <Trans t={t}>
              Market making and liquidity provision is risky and for
              sophisticated parties only. Users of these features should be able to:
            </Trans>
          </p>

          <div className="prose-lg -mb-space-6 grid max-w-none grid-cols-1 gap-space-6 prose-p:mt-0 prose-p:text-vega-light-400 dark:prose-p:text-vega-dark-400 md:grid-cols-3 md:gap-space-4 xl:gap-space-6">
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  i. Actively manage liquidity deployed to a limit order book
                </Trans>
              </p>
            </div>
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  ii. Understand how derivatives pricing works, specifically
                  cash-settle futures
                </Trans>
              </p>
            </div>
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  iii. Code automated trading strategies and operate and monitor
                  them 24/7
                </Trans>
              </p>
            </div>
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  iv. Understand the nuances of integrating with a blockchain
                </Trans>
              </p>
            </div>
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  v. Manage inventory risk and build trading strategies that
                  manage exposure to maintain neutrality
                </Trans>
              </p>
            </div>
            <div className="rounded-xl bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
              <p className="text-[1.125rem]">
                <Trans t={t}>
                  vi. Manage risk effectively in a leveraged trading environment
                </Trans>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="mb-space-4 text-[2rem] leading-none">
            <Trans t={t}>2. CLI Wallet and signer libraries</Trans>
          </h3>

          <p className="body-xl mb-space-4">
            <Trans t={t}>
              A version of the command line wallet is shipped with every new
              version of the protocol allowing developers to programmatically
              sign transactions and access dApps on any network running the
              protocol.
            </Trans>
          </p>

          <p className="body-xl mb-space-4">
            <Trans t={t}>
              Alternastively, signer libraries for various languages allow
              users to create and sign transactions using from within their applications
            </Trans>
          </p>

          <Button
            className="mb-space-6"
            to="https://docs.vega.xyz/release/tools/vega-wallet/cli-wallet/create-wallet"
          >
            <Trans t={t}>Download CLI Wallet</Trans>
          </Button>        
          <Button
            className="mb-space-6"
            to="https://docs.vega.xyz/release/tutorials/community-created#signer-libraries"
          >
            <Trans t={t}>Learn abouut signer libraries</Trans>
          </Button>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h3 className="mb-space-6 text-[2rem] leading-none">
            <Trans t={t}>3. Tutorials and code snippets</Trans>
          </h3>

          <div className="grid grid-cols-1 gap-space-4 md:grid-cols-4 lg:gap-space-7">
            <InfoTile
              title={t('Getting started')}
              link={{
                to: 'https://docs.vega.xyz/release/tutorials/building-a-bot/getting-started',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4 text-[1.125rem]">
                <p>
                  <Trans t={t}>
                    Start development of a bot for the Vega protocol
                  </Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Streaming data')}
              link={{
                to: 'https://docs.vega.xyz/release/tutorials/building-a-bot/streaming-data',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4 text-[1.125rem]">
                <p>
                  <Trans t={t}>Enhance the bot with a data stream</Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Adding a liquidity commitment')}
              link={{
                to: 'https://docs.vega.xyz/release/tutorials/building-a-bot/adding-a-liquidity-commitment',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4 text-[1.125rem]">
                <p>
                  <Trans t={t}>Add a liquidity commitment to the bot</Trans>
                </p>
              </div>
            </InfoTile>
            <InfoTile
              title={t('Adding an external price feed')}
              link={{
                to: 'https://docs.vega.xyz/release/tutorials/building-a-bot/adding-an-external-price',
                title: t('View'),
              }}
            >
              <div className="prose mb-space-4 text-[1.125rem]">
                <p>
                  <Trans t={t}>Add an external price feed to the bot</Trans>
                </p>
              </div>
            </InfoTile>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 md:grid-cols-2 lg:mb-space-14">
          <h2 className="mb-space-6 mt-space-10 text-center text-[2.5rem] leading-none md:mb-space-10 md:mt-space-11 md:text-[3.5rem] lg:mt-space-13">
            <Trans t={t}>Key Resources</Trans>
          </h2>

          <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-space-7">
            <ActionButton to="https://docs.vega.xyz/release/concepts/trading-framework/market-lifecycle">
              <Trans t={t}>Vega market lifecycle</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/release/concepts/trading-framework/trading-modes">
              <Trans t={t}>Vega trading modes</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/release/concepts/trading-framework/fees">
              <Trans t={t}>Fees</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/release/concepts/trading-framework/discounts-rewards">
              <Trans t={t}>Discounts & rewards</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/release/concepts/liquidity/provision">
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
