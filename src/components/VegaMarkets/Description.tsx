import React from 'react'

const marketTypeToShortName = (marketType: string) => {
  switch (marketType) {
    case 'Future':
      return 'FUTR'
    case 'Perpetual':
      return 'PERP'
    case 'Spot':
      return 'SPOT'
    default:
      return marketType
  }
}

export const Description = ({ market }: { market: any }) => {
  const marketName = market.tradableInstrument.instrument.name
  const marketCode = market.tradableInstrument.instrument.code
  const symbol =
    market.tradableInstrument.instrument.product.settlementAsset.symbol
  const marketType = market.tradableInstrument.instrument.product.__typename

  return (
    <div>
      {marketName}
      <br />
      <div className="text-vega-dark-300">
        {marketCode}
        <br />
        {symbol}
        <div className="w-fit rounded-lg bg-vega-light-200 p-1 dark:bg-vega-dark-200">
          {marketTypeToShortName(marketType)}
        </div>
        <br />
      </div>
      <div></div>
    </div>
  )
}
