import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import Tag from '../../components/UI/Tag'
import GlitchTitle from '../../components/UI/GlitchTitle'
import TeamTime from '../../components/UI/TeamTile'
import NumberedListItem from '../../components/UI/NumberedListItem'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const MarketMakingAndLiquidityProvision = () => {
  const { t, i18n } = useTranslation(
    'page.market-making-and-liquidity-provision'
  )
  const [missingTranslations, setMissingTranslations] = useState(false)

  return (
    <Layout>
      <Seo
        title={t('Validate and secure the network')}
        description={t(
          "Vega is a delegated proof of stake network with a finite number of validators, rewarded for securing the network. Consensus validators run a node validating the blocks containing the network's transactions and Vega token holders nominate validators through staking - delegating their VEGA to their chosen validator."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mx-auto mb-space-13 max-w-[60rem] pt-space-5 text-center md:pt-space-6 lg:pt-space-7">
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

        <div className="grid grid-cols-2 gap-space-7">
          <TeamTime
            title="Market makers"
            body="Place static or pegged limit order volume on the book, manage your spread and position, and receive maker fees when an incoming trade matches your order. Currently set to < network param > of the trade value."
          />
          <TeamTime
            title="Liquidity providers"
            body="To access liquidity provision fees on Vega, commit (and continue to support) a set bond amount to help keep a market liquid. The total liquidity needed on a market is determined by the protocol, and you specify the fee % you'd like to receive. Active liquidity providers (starting with the cheapest first) then receive liquidity provider fees."
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
                'You can code automated trading strategies and operate and monitor them 27/7'
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
      </Container>
    </Layout>
  )
}

export default MarketMakingAndLiquidityProvision
