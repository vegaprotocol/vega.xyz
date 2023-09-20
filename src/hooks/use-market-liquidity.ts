import { useQuery, gql } from '@apollo/client'

const LiquidityProvisionFieldsFragmentDoc = gql`
  fragment LiquidityProvisionFields on LiquidityProvision {
    party {
      id
      accountsConnection(marketId: $marketId, type: ACCOUNT_TYPE_BOND) {
        edges {
          node {
            type
            balance
          }
        }
      }
    }
    createdAt
    updatedAt
    commitmentAmount
    fee
    status
  }
`

const MarketLpDocument = gql`
  query MarketLp($marketId: ID!) {
    market(id: $marketId) {
      id
      decimalPlaces
      positionDecimalPlaces
      fees {
        factors {
          makerFee
          infrastructureFee
          liquidityFee
        }
      }
      tradableInstrument {
        instrument {
          code
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
      data {
        market {
          id
          data {
            markPrice
            bestBidPrice
          }
        }
        marketTradingMode
        suppliedStake
        openInterest
        targetStake
        trigger
        marketValueProxy
      }
      liquidityProvisionsConnection(live: true) {
        edges {
          node {
            ...LiquidityProvisionFields
          }
        }
      }
      liquidityMonitoringParameters {
        triggeringRatio
      }
    }
  }
  ${LiquidityProvisionFieldsFragmentDoc}
`

export function useMarketLiquidityProviders(marketId) {
  const { loading, error, data } = useQuery(MarketLpDocument, {
    variables: {
      marketId,
    },
    errorPolicy: 'all',
  })

  return {
    data,
    loading,
    error,
  }
}
