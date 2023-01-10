import { useEffect, useState } from 'react'

export const useStakingApy = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState<null | {}>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`https://api.vega.xyz/epochs`),
      fetch(
        `https://api.vega.xyz/parties/603f97f4499634372cc0fe50f4a0834bdf662d0b54c15b0bac5832367bae239b/rewards`
      ),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json()
          })
        )
      })
      .then(function (data) {
        const latestEpoch = data[1].rewards[0].epoch
        let totalRewards = 0
        let percentageOfTotal = 0

        // Find the total rewards for the latest epoch
        for (const reward of data[1].rewards) {
          if (reward.rewardType === 'ACCOUNT_TYPE_GLOBAL_REWARD') {
            totalRewards = reward.amount
            percentageOfTotal = reward.percentageOfTotal
            break
          }
        }

        const totalRewardsThisEpoch =
          totalRewards / Math.pow(10, 18) / (percentageOfTotal / 100)

        // Find the total staked on network
        let stakedTotal = 0
        data[0].epoch.validators.forEach((validator) => {
          let validatorTotal = parseInt(validator.stakedTotal)
          stakedTotal = stakedTotal + validatorTotal
        })

        stakedTotal = stakedTotal / Math.pow(10, 18)

        // Calculate APY
        const apy = ((totalRewardsThisEpoch / stakedTotal) * 365 * 100).toFixed(
          3
        )

        setData({
          apy: apy,
          totalRewardsThisEpoch: totalRewardsThisEpoch.toFixed(0),
        })
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false)
        setError(error)
      })
  }, [])

  return { data, loading, error }
}
