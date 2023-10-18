import React from 'react'

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
      <div className="flex justify-between">
        <div className="text-vega-dark-300">
          {marketCode}
          <br />
          {symbol}
          <br />
        </div>
        <div>
          <div className="w-fit rounded-lg bg-vega-dark-200 p-1">
            {marketType}
          </div>
        </div>
      </div>
    </div>
  )
}
