import { useState, useEffect } from 'react'

const useRewardsMarketCreation = () => {
  const [rewards, setRewards] = useState<null | number>(null)
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
        const thirtyEpochsAgo = currentEpoch - 30
        let rewardsAmount = 0

        let rewardsResponse = await fetch(
          `${process.env.GATSBY_VEGA_REST_API}/api/v2/rewards/epoch/summaries?filter.assetIds=${process.env.GATSBY_VEGA_ASSET_ID}&filter.fromEpoch=${thirtyEpochsAgo}&filter.toEpoch=${currentEpoch}`
        )
        const response = await rewardsResponse.json()

        response.summaries.edges.forEach((summary) => {
          if (
            summary.node.rewardType === 'ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS'
          ) {
            rewardsAmount += Number(summary.node.amount)
          }
        })

        setRewards(rewardsAmount)
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

export default useRewardsMarketCreation