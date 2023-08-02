import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useNetworkParams } from '../../hooks/use-network-params'

const useTotalVolume = () => {
  const [totalVolume, setTotalVolume] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const environment =
    process.env.GATSBY_VERCEL_ENV !== undefined
      ? process.env.GATSBY_VERCEL_ENV
      : 'production'

  const network = environment === 'production' ? 'mainnet' : 'testnet'

  const {
    params,
    loading: paramsLoading,
    error: paramsError,
  } = useNetworkParams()

  const assets = [
    {
      name: 'Tether',
      symbol: 'USDT',
      coingeckoId: 'tether',
      vegaAssetId: {
        mainnet:
          'bf1e88d19db4b3ca0d1d5bdb73718a01686b18cf731ca26adedf3c8b83802bba',
        testnet: '',
      },
      decimals: 6,
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      vegaAssetId: {
        mainnet:
          'a4a16e250a09a86061ec83c2f9466fc9dc33d332f86876ee74b6f128a5cd6710',
        testnet:
          'c9fe6fc24fce121b2cc72680543a886055abb560043fda394ba5376203b7527d',
      },
      decimals: 6,
    },
    {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      coingeckoId: 'weth',
      vegaAssetId: {
        mainnet:
          '476196e453f9eccde93381bd5043f5f68ba96955f553ceea6f7611cc5785e958',
        testnet: '',
      },
      decimals: 18,
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      coingeckoId: 'bitcoin',
      vegaAssetId: {
        mainnet: '',
        testnet:
          'cee709223217281d7893b650850ae8ee8a18b7539b5658f9b4cc24de95dd18ad',
      },
      decimals: 8,
    },
    {
      name: 'Euro Coin',
      symbol: 'EUR',
      coingeckoId: 'euro-coin',
      vegaAssetId: {
        mainnet: '',
        testnet:
          '177e8f6c25a955bd18475084b99b2b1d37f28f3dec393fab7755a7e69c3d8c3b',
      },
      decimals: 5,
    },
    {
      name: 'Dai',
      symbol: 'DAI',
      coingeckoId: 'dai',
      vegaAssetId: {
        mainnet: '',
        testnet:
          'b340c130096819428a62e5df407fd6abe66e444b89ad64f670beb98621c9c663',
      },
      decimals: 18,
    },
  ]

  const coingeckoIds = assets.map((asset) => asset.coingeckoId).join(',')

  useEffect(() => {
    if (params !== null) {
      const marketFeeFactorsInfrastructureFee =
        params['market_fee_factors_infrastructureFee']

      const fetchTotalVolume = async () => {
        setLoading(true)
        try {
          // get current epoch
          let epochResponse = await fetch(
            `${process.env.GATSBY_VEGA_REST_API}/api/v2/rewards/epoch/summaries`
          )
          const epochs = await epochResponse.json()
          const currentEpoch = epochs.summaries.edges[0].node.epoch

          let coinGeckoPrice = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoIds}&vs_currencies=usd&include_last_updated_at=true`
          )
          const coinGeckoPrices = await coinGeckoPrice.json()

          let volume: { [key: string]: BigNumber } = {}

          assets.map((asset) => {
            const assetIdValue = asset.vegaAssetId[network]

            if (assetIdValue) {
              // find relevant asset and rewardType in current epoch
              const results = epochs.summaries.edges.filter((summary) => {
                return (
                  summary.node.epoch === currentEpoch &&
                  summary.node.rewardType ===
                    'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' &&
                  summary.node.assetId == assetIdValue
                )
              })

              if (results.length > 0) {
                // include decimals
                let value = new BigNumber(results[0].node.amount).dividedBy(
                  Math.pow(10, asset.decimals)
                )

                // divide by infrastructure fee
                value = value.dividedBy(marketFeeFactorsInfrastructureFee)

                // multiply by usd price
                value.multipliedBy(coinGeckoPrices[asset.coingeckoId].usd)
                volume[assetIdValue] = value
              }
            }
          })

          // sum all volumes now in usd
          const totalVolume = Object.values(volume).reduce<BigNumber>(
            (sum, val) => sum.plus(val),
            new BigNumber(0)
          )

          setTotalVolume(totalVolume.integerValue().toString())
          setLoading(false)
        } catch (error) {
          setError(error.message)
          setLoading(false)
        }
      }

      fetchTotalVolume()
    }
  }, [params])

  return { totalVolume, loading, error }
}

export default useTotalVolume
