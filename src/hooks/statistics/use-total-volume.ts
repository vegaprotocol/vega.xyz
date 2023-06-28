import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useNetworkParams } from '../../hooks/use-network-params'

const useTotalVolume = () => {
  const [totalVolume, setTotalVolume] = useState<null | number>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {
    params,
    loading: paramsLoading,
    error: paramsError,
  } = useNetworkParams()

  useEffect(() => {
    if (params !== null) {
      const marketFeeFactorsInfrastructureFee =
        params['market_fee_factors_infrastructureFee']

      const fetchTotalVolume = async () => {
        setLoading(true)
        try {
          let epochResponse = await fetch(
            `${process.env.GATSBY_VEGA_REST_API}/api/v2/rewards/epoch/summaries`
          )
          const epochs = await epochResponse.json()
          const currentEpoch = epochs.summaries.edges[0].node.epoch

          const usdt = epochs.summaries.edges.filter((summary) => {
            return (
              summary.node.epoch === currentEpoch &&
              summary.node.rewardType === 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' &&
              summary.node.assetId ==
                'bf1e88d19db4b3ca0d1d5bdb73718a01686b18cf731ca26adedf3c8b83802bba'
            )
          })

          const usdc = epochs.summaries.edges.filter((summary) => {
            return (
              summary.node.epoch === currentEpoch &&
              summary.node.rewardType === 'ACCOUNT_TYPE_FEES_INFRASTRUCTURE' &&
              summary.node.assetId ==
                'a4a16e250a09a86061ec83c2f9466fc9dc33d332f86876ee74b6f128a5cd6710'
            )
          })

          const usdtVegaSum = usdt
            .reduce((acc, cur) => {
              return acc.plus(new BigNumber(cur.node.amount))
            }, new BigNumber(0))
            .multipliedBy(marketFeeFactorsInfrastructureFee)

          const usdcVegaSum = usdc
            .reduce((acc, cur) => {
              return acc.plus(new BigNumber(cur.node.amount))
            }, new BigNumber(0))
            .multipliedBy(marketFeeFactorsInfrastructureFee)

          let coinGeckoPrice = await fetch(
            `https://api.coingecko.com/api/v3/simple/price?ids=vega-protocol,tether,usd-coin,weth&vs_currencies=usd&include_last_updated_at=true`
          )
          const prices = await coinGeckoPrice.json()
          const vegaUSD = prices['vega-protocol'].usd

          const usdtVolume = usdtVegaSum.multipliedBy(vegaUSD)
          const usdcVolume = usdcVegaSum.multipliedBy(vegaUSD)
          const totalVolume = usdtVolume.plus(usdcVolume)

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
