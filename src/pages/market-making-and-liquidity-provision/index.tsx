import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Seo from '../../components/Seo'
import Tag from '../../components/UI/Tag'
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
        <div className="mb-space-8 max-w-[60rem] pt-space-5 md:pt-space-6 lg:pt-space-7">
          <h1 className="mb-space-4">
            <Tag>
              <Trans t={t}>Use Vega</Trans>
            </Tag>
          </h1>
          <h2 className="heading-l mb-space-8">
            <Trans t={t}>
              Market make and provide liquidity using our APIs
            </Trans>
          </h2>
          <div className="body-xl">
            <Trans t={t}>
              On Vega, price takers pay a fee on every trade - 100% of which is
              distributed between validators and token holders, market makers
              and liquidity providers. There are no gas fees on Vega.
            </Trans>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default MarketMakingAndLiquidityProvision
