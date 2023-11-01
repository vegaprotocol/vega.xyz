import BigNumber from 'bignumber.js'
import { addDecimalsFormatNumber } from '../vega/number'

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

export const sortMarketsByNewest = (processedMarketData, limit = 4) => {
  return processedMarketData
    .sort(
      (a, b) =>
        new Date(b.openTimestamp).getTime() -
        new Date(a.openTimestamp).getTime()
    )
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
  const result = marketData
    .map((edge) => {
      const marketName =
        edge.node.data.market.tradableInstrument.instrument.name
      const markPrice = new BigNumber(edge.node.data.markPrice)
      const positionDecimalPlaces = edge.node.data.market.positionDecimalPlaces
      const decimalPlaces = edge.node.data.market.decimalPlaces
      const openTimestamp = edge.node.data.market.marketTimestamps.open
      const marketState = edge.node.data.marketState

      if (!markPrice.isZero()) {
        const candles = edge.node.candlesConnection?.edges
        let priceChange24h = new BigNumber(0)

        if (candles && candles.length >= 2) {
          const firstCandle = candles[0].node
          const lastCandle = candles[candles.length - 1].node

          const volume24h = calc24hVolume(candles)
          const openPrice = new BigNumber(firstCandle.open)
          const closePrice = new BigNumber(lastCandle.close)
          priceChange24h = closePrice
            .minus(openPrice)
            .dividedBy(openPrice)
            .multipliedBy(100)

          return {
            name: marketName,
            marketState: marketState,
            volume: volume24h,
            formattedVolume: addDecimalsFormatNumber(
              volume24h.toString(),
              positionDecimalPlaces
            ),
            lastPrice: addDecimalsFormatNumber(
              markPrice.toString(),
              decimalPlaces
            ),
            priceChange: priceChange24h.toFixed(2) + '%',
            sparkLineValues: sparkLineValues(candles),
            openTimestamp: openTimestamp,
          }
        } else {
          return {
            name: marketName,
            marketState: marketState,
            volume: 0,
            formattedVolume: addDecimalsFormatNumber(0, positionDecimalPlaces),
            lastPrice: addDecimalsFormatNumber(
              markPrice.toString(),
              decimalPlaces
            ),
            priceChange: priceChange24h.toFixed(2) + '%',
            sparkLineValues: sparkLineValues(candles),
            openTimestamp: openTimestamp,
          }
        }
      }
    })
    .filter((item) => item !== undefined)

  return result
}

export const toRFC3339Nano = (date) => {
  const isoString = date.toISOString()
  const nanoSeconds = date.getMilliseconds().toString().padStart(3, '0')
  return isoString.replace('Z', nanoSeconds + 'Z')
}
