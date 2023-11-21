import * as Schema from './types'

export const getStatus = (
  tradingMode: Schema.MarketTradingMode,
  trigger: Schema.AuctionTrigger
) => {
  if (!tradingMode) return ''
  if (
    tradingMode === Schema.MarketTradingMode.TRADING_MODE_MONITORING_AUCTION
  ) {
    if (
      trigger &&
      trigger !== Schema.AuctionTrigger.AUCTION_TRIGGER_UNSPECIFIED
    ) {
      return `${Schema.MarketTradingModeMapping[tradingMode]} - ${Schema.AuctionTriggerMapping[trigger]}`
    }
  }
  return Schema.MarketTradingModeMapping[tradingMode]
}
