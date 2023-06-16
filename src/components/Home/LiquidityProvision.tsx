import React, { useMemo } from 'react'
import { useYesterday } from '@vegaprotocol/react-helpers'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import LiquidtyTile from '../LiquidityTile'
import Button from '../UI/Button'
import { useMarkets } from '../../hooks/use-markets'

const LiquidityProvision = () => {
  const { t } = useTranslation('component.liquidity-provision')

  const yesterday = useYesterday()
  const yTimestamp = useMemo(() => {
    return new Date(yesterday).toISOString()
  }, [yesterday])
  const { data, loading, error } = useMarkets(yTimestamp)

  const markets = data?.marketsConnection?.edges.slice(0, 4) || []

  return (
    <div>
      <div className="mb-space-6 flex items-center justify-between gap-x-space-6">
        <h2 className="heading-m max-w-[23rem] md:max-w-none">
          <Trans t={t}>Liquidity Provision on Vega</Trans>
        </h2>
        <Button
          to="/liquidity-provision"
          variant="secondary"
          className="shrink-0 text-vega-light-300 dark:text-vega-dark-300"
        >
          <Trans t={t}>View all</Trans>
        </Button>
      </div>

      {markets && (
        <div className="grid grid-cols-1 gap-space-4 md:grid-cols-2 md:gap-space-4 lg:grid-cols-4 lg:gap-space-4 xl:gap-space-6">
          {markets.map((market, index) => (
            <LiquidtyTile marketId={market.node.data.market.id} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default LiquidityProvision
