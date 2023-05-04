import { useQuery, gql } from '@apollo/client'

export const MarketsDataFieldsFragmentDoc = gql`
  fragment MarketsDataFields on MarketData {
    market {
      id
      tradableInstrument {
        instrument {
          name
          product {
            ... on Future {
              settlementAsset {
                id
                symbol
                decimals
              }
            }
          }
        }
      }
      marketTimestamps {
        open
      }
    }
    bestBidPrice
    bestOfferPrice
    markPrice
    trigger
    staticMidPrice
    marketTradingMode
    indicativeVolume
    indicativePrice
    bestStaticBidPrice
    bestStaticOfferPrice
    targetStake
    suppliedStake
    auctionStart
    auctionEnd
  }
`
export const MarketCandlesFieldsFragmentDoc = gql`
  fragment MarketCandlesFields on Candle {
    volume
    periodStart
    lastUpdateInPeriod
    high
    low
    open
    close
  }
`
export const MarketsDataQuery = gql`
  query MarketsData($since: String!, $interval: Interval!) {
    marketsConnection {
      edges {
        node {
          data {
            ...MarketsDataFields
          }
          candlesConnection(interval: $interval, since: $since) {
            edges {
              node {
                ...MarketCandlesFields
              }
            }
          }
        }
      }
    }
  }
  ${MarketsDataFieldsFragmentDoc}
  ${MarketCandlesFieldsFragmentDoc}
`

export function useMarkets(since: string) {
  const interval = 'INTERVAL_I1H'
  const variables = { since, interval }
  const { loading, error, data } = useQuery(MarketsDataQuery, {
    variables,
  })

  return { data, loading, error }
}
