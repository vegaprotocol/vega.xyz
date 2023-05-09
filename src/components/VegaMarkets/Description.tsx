import React from 'react'

export const Description = ({ market }: { market: any }) => {
  console.log('market', market)
  const marketName = market.tradableInstrument.instrument.name
  const marketCode = market.tradableInstrument.instrument.code
  const symbol =
    market.tradableInstrument.instrument.product.settlementAsset.symbol
  return (
    <div style={{}}>
      {marketName}
      <br />
      {marketCode}
      <br />
      {symbol}
    </div>
  )
}
