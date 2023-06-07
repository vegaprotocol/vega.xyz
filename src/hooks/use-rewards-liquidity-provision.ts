import { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'

BigNumber.config({
  EXPONENTIAL_AT: 1e9,
})

const useRewardsLiquidityProvision = () => {
  const [rewards, setRewards] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRewardFees = async () => {
      setLoading(true)
      try {
        let epochResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/statistics`
        )

        const epoch = await epochResponse.json()
        const currentEpoch = epoch.statistics.epochSeq
        const period = 1
        const periodStartEpoch = currentEpoch - period
        let rewardsAmount = new BigNumber(0)

        let rewardsResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/api/v2/rewards/epoch/summaries?filter.assetIds=${process.env.GATSBY_VEGA_ASSET_ID}&filter.fromEpoch=${periodStartEpoch}&filter.toEpoch=${currentEpoch}`
        )
        const response = await rewardsResponse.json()

        response.summaries.edges.forEach((summary) => {
          if (
            summary.node.rewardType === 'ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES'
          ) {
            const reward = new BigNumber(summary.node.amount.toString())
            rewardsAmount = rewardsAmount.plus(reward)
          }
        })

        rewardsAmount = rewardsAmount.dividedBy(period.toString())

        setRewards(rewardsAmount.toString())
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchRewardFees()
  }, [])

  return { rewards, loading, error }
}

export default useRewardsLiquidityProvision
