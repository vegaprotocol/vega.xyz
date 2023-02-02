import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import Tag from '../../components/UI/Tag'
import Button from '../../components/UI/Button'
import GlitchTitle from '../../components/UI/GlitchTitle'
import TeamTile from '../../components/UI/TeamTile'
import GetStartedTile from '../../components/UI/GetStartedTile'
import APIGraphic from '../../components/Svg/APIGraphic'
import NumberedListItem from '../../components/UI/NumberedListItem'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import GRPC from '../../components/Svg/GRPC'
import REST from '../../components/Svg/REST'
import GraphQL from '../../components/Svg/GraphQL'
import CoreNodes from '../../components/RestAPI/CoreNodes'
import DataNodes from '../../components/RestAPI/DataNodes'
import VegaWallet from '../../components/RestAPI/VegaWallet'

const MarketMakingAndLiquidityProvision = () => {
  const { t, i18n } = useTranslation(
    'page.market-making-and-liquidity-provision'
  )
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('APIs for market making and liquidity')}
        description={t(
          'On Vega, price takers pay a fee on every trade - 100% of which is distributed between validators and token holders, market makers and liquidity providers. There are no gas fees on Vega.'
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
              <Trans t={t}>APIs for market making and liquidity</Trans>
            </GlitchTitle>
          </h2>
          <div className="body-xl">
            <Trans t={t}>
              On Vega, price takers pay a fee on every trade - 100% of which is
              distributed between validators and token holders, market makers
              and liquidity providers. There are no gas fees on Vega.
            </Trans>
          </div>
        </div>

        <div className="mb-space-10 grid grid-cols-1 gap-space-4 md:mb-space-11 md:grid-cols-2 md:gap-space-7">
          <TeamTile
            title={t('Market makers')}
            body={t(
              'Place static or pegged limit order volume on the book, manage your spread and position, and receive maker fees when an incoming trade matches your order. Currently set to < network param > of the trade value.'
            )}
          />
          <TeamTile
            title={t('Liquidity providers')}
            body={t(
              "To access liquidity provision fees on Vega, commit (and continue to support) a set bond amount to help keep a market liquid. The total liquidity needed on a market is determined by the protocol, and you specify the fee % you'd like to receive. Active liquidity providers (starting with the cheapest first) then receive liquidity provider fees."
            )}
          />
        </div>

        <div className="mb-space-10 max-w-[47.5rem] md:mx-auto md:mb-space-11 lg:mb-space-13">
          <h2 className="heading-l mb-space-6">
            <Trans t={t}>Prerequisites</Trans>
          </h2>

          <div className="mb-space-4 border-t md:mb-space-11 lg:mb-space-13">
            <NumberedListItem
              number="1"
              text={t(
                'You know how to actively manage liquidity deployed to a limit order book'
              )}
            />
            <NumberedListItem
              number="2"
              text={t(
                'You understand how derivates pricing work, specifically cash settled-futures'
              )}
            />
            <NumberedListItem
              number="3"
              text={t(
                'You can code automated trading strategies and operate and monitor them 24/7'
              )}
            />
            <NumberedListItem
              number="4"
              text={t(
                'You understand the nuances of integrating with a blockchain, and for example, you might be familiar with tools like Web3.js used to interact with Ethereum'
              )}
            />
            <NumberedListItem
              number="5"
              text={t(
                'You know how to manage risk in a leveraged trading environment'
              )}
            />
          </div>
        </div>

        <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
          <div>
            <p className="title-l mb-space-3">
              <Trans t={t}>Check out our APIs</Trans>
            </p>
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
              to="https://docs.vega.xyz/testnet/category/api/rest/core/core-service"
            >
              <Trans t={t}>View all core nodes</Trans>
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
              to="https://docs.vega.xyz/testnet/category/api/rest/data-v2/trading-data-service"
            >
              <Trans t={t}>View all data nodes</Trans>
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
              to="https://docs.vega.xyz/testnet/api/vega-wallet/v2-api/get-started"
            >
              <Trans t={t}>View Vega Wallet API</Trans>
            </Button>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <div className="mt-space-6 mb-space-6 mb-space-10 flex items-center gap-x-10">
            <div className="heading-s">
              <Trans t={t}>Accessd via:</Trans>
            </div>
            <GRPC />
            <REST />
            <GraphQL />
          </div>

          <Button to="https://docs.vega.xyz/mainnet/api/overview">
            <Trans t={t}>Integrate with our APIs</Trans>
          </Button>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h2 className="heading-l mx-auto mb-space-8 max-w-[48rem] text-center">
            <Trans t={t}>Follow a tutorial and get code snippets</Trans>
          </h2>

          <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2 md:gap-space-7">
            <GetStartedTile
              title={t('Market makers')}
              link={{ to: '', title: t('View') }}
            >
              <div className="prose dark:prose-invert">
                <ul>
                  <li>
                    <Trans t={t}>Signing messages using the wallet API</Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Submitting limit orders via REST (inc. using batch
                      instructions)
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>Streaming positions and orders via WS</Trans>
                  </li>
                </ul>
              </div>
            </GetStartedTile>
            <GetStartedTile
              title={t('Providing and maintaining a liquidity commitment')}
              link={{ to: '', title: t('View') }}
            >
              <div className="prose dark:prose-invert">
                <ul>
                  <li>
                    <Trans t={t}>Submitting an LP shape via REST</Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Streaming accounts, positions, orders and market data via
                      WS
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Amending an LP shape based on position and market data
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Submit and maintain best bid/ask via REST
                    </Trans>
                  </li>
                </ul>
              </div>
            </GetStartedTile>
            <GetStartedTile
              title={t('Build an arbitrage strategy')}
              link={{ to: '', title: t('View') }}
            >
              <div className="prose dark:prose-invert">
                <ul>
                  <li>
                    <Trans t={t}>Stream order book on Binance and Vega</Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Streaming accounts, positions, orders and market data
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Check prices for profitable arbs (net of fees)
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Submit market orders via REST on both exchanges capturing
                      profit from price deviation
                    </Trans>
                  </li>
                </ul>
              </div>
            </GetStartedTile>
            <GetStartedTile
              title={t('Deposit and withdraw collateral')}
              link={{ to: '', title: t('View') }}
            >
              <div className="prose dark:prose-invert">
                <ul>
                  <li>
                    <Trans t={t}>
                      Deposit to a specified Vega key using the Web3 client and
                      bridge contracts
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Withdraw from a Vega key to a specified Ethereum address,
                      correctly handling the bridge delay
                    </Trans>
                  </li>
                </ul>
              </div>
            </GetStartedTile>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default MarketMakingAndLiquidityProvision
