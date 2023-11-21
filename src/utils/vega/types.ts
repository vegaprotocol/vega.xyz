//these enums are _generated_ types in the monorepo. We should configure a pipeline to generate our own.

/** What market trading mode is the market in */
export enum MarketTradingMode {
  /** Auction as normal trading mode for the market, where orders are uncrossed periodically */
  TRADING_MODE_BATCH_AUCTION = 'TRADING_MODE_BATCH_AUCTION',
  /** Continuous trading where orders are processed and potentially matched on arrival */
  TRADING_MODE_CONTINUOUS = 'TRADING_MODE_CONTINUOUS',
  /** Auction triggered by price/liquidity monitoring */
  TRADING_MODE_MONITORING_AUCTION = 'TRADING_MODE_MONITORING_AUCTION',
  /** No trading allowed */
  TRADING_MODE_NO_TRADING = 'TRADING_MODE_NO_TRADING',
  /** Auction trading where orders are uncrossed at the end of the opening auction period */
  TRADING_MODE_OPENING_AUCTION = 'TRADING_MODE_OPENING_AUCTION',
}

/** Describes the trigger for an auction */
export enum AuctionTrigger {
  /** Auction because market has a frequent batch auction trading mode */
  AUCTION_TRIGGER_BATCH = 'AUCTION_TRIGGER_BATCH',
  /** Liquidity monitoring due to unmet target stake */
  AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET = 'AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET',
  /** Opening auction */
  AUCTION_TRIGGER_OPENING = 'AUCTION_TRIGGER_OPENING',
  /** Price monitoring */
  AUCTION_TRIGGER_PRICE = 'AUCTION_TRIGGER_PRICE',
  /** Liquidity monitoring due to not being able to deploy LP orders because there's nothing to peg on one or both sides of the book */
  AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS = 'AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS',
  /** Invalid trigger (or no auction) */
  AUCTION_TRIGGER_UNSPECIFIED = 'AUCTION_TRIGGER_UNSPECIFIED',
}

/**
 * What market trading mode is the market in
 */
export const MarketTradingModeMapping: {
  [T in MarketTradingMode]: string
} = {
  TRADING_MODE_BATCH_AUCTION: 'Batch auction',
  TRADING_MODE_CONTINUOUS: 'Continuous',
  TRADING_MODE_MONITORING_AUCTION: 'Monitoring auction',
  TRADING_MODE_NO_TRADING: 'No trading',
  TRADING_MODE_OPENING_AUCTION: 'Opening auction',
}

export const AuctionTriggerMapping: {
  [T in AuctionTrigger]: string
} = {
  AUCTION_TRIGGER_BATCH: 'batch',
  AUCTION_TRIGGER_LIQUIDITY_TARGET_NOT_MET: 'liquidity (target not met)',
  AUCTION_TRIGGER_UNABLE_TO_DEPLOY_LP_ORDERS:
    'liquidity (unable to deploy liquidity provision orders)',
  AUCTION_TRIGGER_OPENING: 'opening',
  AUCTION_TRIGGER_PRICE: 'price',
  AUCTION_TRIGGER_UNSPECIFIED: 'unspecified',
}
