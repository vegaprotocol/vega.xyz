import React from 'react'
import BigNumber from 'bignumber.js'
import { useMarketLiquidityProviders } from '../hooks/use-market-liquidity'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import {
  addDecimalsFormatNumber,
  formatNumberPercentage,
  toBigNum,
} from '../utils/vega/number'
import { getStatus } from '../utils/vega/getStatus'
import { Intent } from '../utils/vega/Intent'
import * as Schema from '../utils/vega/types'
import { HealthBar } from '../components/HealthBar'
import Pill from '../components/UI/Pill'
import { marketTypeToShortName } from '../utils/vega/Markets'

const percentageLiquidity = (suppliedStake, targetStake) => {
  const roundedPercentage =
    parseInt((suppliedStake / parseFloat(targetStake)).toFixed(0)) * 100
  const display = Number.isNaN(roundedPercentage)
    ? 'N/A'
    : roundedPercentage > 100
    ? '100%'
    : formatNumberPercentage(toBigNum(roundedPercentage, 0), 0)
  return display
}

const percentageFormatter = (value) => {
  if (!value) return '-'
  return formatNumberPercentage(new BigNumber(value).times(100), 2) || '-'
}

const intentForStatus = (status: Schema.MarketTradingMode) => {
  return marketTradingModeIntent[status]
}

const marketTradingModeIntent = {
  [Schema.MarketTradingMode.TRADING_MODE_CONTINUOUS]: Intent.Success,
  [Schema.MarketTradingMode.TRADING_MODE_MONITORING_AUCTION]: Intent.Danger,
  [Schema.MarketTradingMode.TRADING_MODE_OPENING_AUCTION]: Intent.Primary,
  [Schema.MarketTradingMode.TRADING_MODE_BATCH_AUCTION]: Intent.Danger,
  [Schema.MarketTradingMode.TRADING_MODE_NO_TRADING]: Intent.Danger,
}

const getFeeLevels = (providers: any[]) => {
  const parsedProviders = providers.map((p) => {
    const node = p?.node || {}
    return node
  })
  const lp = parsedProviders.reduce(
    (total: { [x: string]: number }, current) => {
      const { fee = '0', commitmentAmount = '0' } = current
      const ca = parseInt(commitmentAmount, 10)

      return {
        ...total,
        [fee]: total[fee] ? total[fee] + ca : ca,
      }
    },
    {}
  )

  const sortedProviders = Object.keys(lp)
    .sort()
    .map((p) => ({ fee: p, commitmentAmount: lp[p] }))

  return sortedProviders
}

const LiquidtyTile = ({ marketId }: { marketId: string }) => {
  const { t } = useTranslation('component.liquidity-tile')
  const { data, loading, error } = useMarketLiquidityProviders(marketId)

  if (loading) return <div>Loading...</div>
  if (data) {
    const suppliedStake = data.market.data.suppliedStake
    const decimals =
      data.market.tradableInstrument.instrument.product.settlementAsset.decimals
    const name = data.market.tradableInstrument.instrument.name
    const code = data.market.tradableInstrument.instrument.code
    const settlementAsset =
      data.market.tradableInstrument.instrument.product.settlementAsset.symbol
    const formattedSuppliedStake = addDecimalsFormatNumber(
      suppliedStake,
      decimals
    )
    const percentageStaked = percentageLiquidity(
      suppliedStake,
      data.market.data.targetStake
    )
    const liquidityFee = percentageFormatter(
      data.market.fees?.factors?.liquidityFee
    )
    const targetStake = data.market.data.targetStake
    const settlementAssetDecimals =
      data.market.tradableInstrument.instrument.product.settlementAsset.decimals
    const feeLevels = getFeeLevels(
      data.market?.liquidityProvisionsConnection?.edges || []
    )
    const tradingMode = data.market.data.marketTradingMode
    const auctionTrigger = data.auctionTrigger
    const tradingModeLabel = getStatus(tradingMode, auctionTrigger)
    const marketType =
      data.market.tradableInstrument.instrument.product.__typename

    return (
      <div className="flex h-full flex-col justify-between gap-y-4 rounded-xl border border-vega-light-200 p-space-5 dark:border-vega-dark-200">
        <div>
          <div className="mb-space-3 flex">
            {marketType && (
              <Pill active={true} inverse={true}>
                {marketTypeToShortName(marketType)}
              </Pill>
            )}
          </div>
          <div>
            <div className="leading-tight">{name}</div>
            <div className="mb-space-4 flex flex-wrap gap-x-space-4 text-base leading-tight text-vega-light-300 dark:text-vega-dark-300">
              <div>{code}</div> <div>{settlementAsset}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-space-3 flex flex-wrap justify-between gap-space-3">
            <div>
              <div className="text-[0.75rem] text-vega-light-300 dark:text-vega-dark-300">
                <Trans t={t}>Supplied:</Trans>
              </div>
              <div className="body-xl">{formattedSuppliedStake}</div>
              <div className="relative -top-space-1 text-[0.875rem]">
                ({percentageStaked} of target)
              </div>
            </div>
            <div>
              <div className="text-[0.75rem] text-vega-light-300 dark:text-vega-dark-300">
                <Trans t={t}>Fee:</Trans>
              </div>
              <div className="body-xl">{liquidityFee}</div>
            </div>
          </div>
          <div className="-mb-space-2">
            <div className="text-[0.75rem] leading-none text-vega-light-300 dark:text-vega-dark-300">
              {tradingModeLabel}
            </div>
            <HealthBar
              target={targetStake}
              decimals={settlementAssetDecimals}
              levels={feeLevels}
              intent={intentForStatus(tradingMode)}
            />
          </div>
        </div>
      </div>
    )
  }
  return <></>
}

export default LiquidtyTile
