import React from 'react'
import RewardBox from './RewardBox'
import useRewardsMarketMaking from '../../hooks/use-rewards-market-making'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const MarketMakingRewards = () => {
  const { t } = useTranslation('component.rewards')
  const { rewards, loading, error } = useRewardsMarketMaking()

  return (
    <>
      {rewards !== null && (
        <RewardBox
          title={t('Market Making')}
          rewardValue={rewards}
          rewardValueQualifier={t('Average total paid out per epoch')}
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of the total maker fees
                you've received in this epoch.
              </Trans>
            </div>
          }
          buttonText={t('Market Make')}
          buttonLink="https://docs.vega.xyz/testnet/tutorials/building-a-bot/getting-started"
        />
      )}
    </>
  )
}

export default MarketMakingRewards
