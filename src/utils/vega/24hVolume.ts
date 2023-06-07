import BigNumber from 'bignumber.js'

export const calc24hVolume = (candles) => {
  return candles
    .reduce((acc, c) => {
      return acc.plus(new BigNumber(c?.node?.volume ?? 0))
    }, new BigNumber(0))
    .toString()
}
