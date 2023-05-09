import React from 'react'

export const Description = ({ market }: { market: any }) => {
  const marketName = market.tradableInstrument.instrument.name
  const marketCode = market.tradableInstrument.instrument.code
  const symbol =
    market.tradableInstrument.instrument.product.settlementAsset.symbol
  return (
    <div style={{}}>
      {marketName}
      <br />
      <div style={{ color: '#8B8B8B' }}>
        {marketCode}
        <br />
        {symbol}
      </div>
    </div>
  )
}
