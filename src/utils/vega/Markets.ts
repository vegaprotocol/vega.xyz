import BigNumber from 'bignumber.js'

export const calc24hVolume = (candles) => {
  return candles
    .reduce((acc, c) => {
      return acc.plus(new BigNumber(c?.node?.volume ?? 0))
    }, new BigNumber(0))
    .toString()
}

export const sparkLineValues = (candles) => {
  if (candles && candles.length) {
    return candles.map((edge) => parseFloat(edge.node.close))
  }
  return []
}

export const sortMarketsByTopVolume = (processedMarketData, limit = 4) => {
  return processedMarketData
    .slice()
    .sort((a, b) => {
      const volumeA = new BigNumber(a['volume'])
      const volumeB = new BigNumber(b['volume'])

      return volumeB.minus(volumeA).toNumber()
    })
    .slice(0, limit)
}

export const sortMarketsByTopGainers = (processedMarketData, limit = 4) => {
  return processedMarketData
    .slice()
    .sort((a, b) => {
      const changeA = parseFloat(a['priceChange'].replace('%', ''))
      const changeB = parseFloat(b['priceChange'].replace('%', ''))

      return changeB - changeA
    })
    .slice(0, limit)
}

export const sortMarketsByTopLosers = (processedMarketData, limit = 4) => {
  return processedMarketData
    .slice()
    .sort((a, b) => {
      const changeA = parseFloat(a['priceChange'].replace('%', ''))
      const changeB = parseFloat(b['priceChange'].replace('%', ''))

      return changeA - changeB
    })
    .slice(0, limit)
}

export const processMarketData = (marketData) => {
  const result = marketData.marketsConnection.edges.map((edge) => {
    const marketName = edge.node.data.market.tradableInstrument.instrument.name
    const markPrice = new BigNumber(edge.node.data.markPrice)
    const candles = edge.node.candlesConnection?.edges

    let volume24h = new BigNumber(0)
    let priceChange24h = new BigNumber(0)

    if (candles && candles.length >= 2) {
      const firstCandle = candles[0].node
      const lastCandle = candles[candles.length - 1].node
      volume24h = candles.reduce(
        (total, candle) => total.plus(candle.node.volume),
        new BigNumber(0)
      )
      const openPrice = new BigNumber(firstCandle.open)
      const closePrice = new BigNumber(lastCandle.close)
      priceChange24h = closePrice
        .minus(openPrice)
        .dividedBy(openPrice)
        .multipliedBy(100)
    }

    return {
      name: marketName,
      volume: volume24h.toFixed(2),
      lastPrice: markPrice.toFixed(2),
      priceChange: priceChange24h.toFixed(2) + '%',
      sparkLineValues: sparkLineValues(candles),
    }
  })

  return result
}

export const toRFC3339Nano = (date) => {
  const isoString = date.toISOString()
  const nanoSeconds = date.getMilliseconds().toString().padStart(3, '0')
  return isoString.replace('Z', nanoSeconds + 'Z')
}
