import React from 'react'
import RewardBox from './RewardBox'
import useRewardsTrading from '../../hooks/use-rewards-trading'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const TradingRewards = () => {
  const { t } = useTranslation('component.rewards')
  const { rewards, loading, error } = useRewardsTrading()

  return (
    <>
      {rewards !== null && (
        <RewardBox
          title={t('Trading')}
          rewardValue={rewards}
          rewardValueQualifier="Average total paid out per epoch"
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of total maker fees you've
                paid in this epoch.
              </Trans>
            </div>
          }
          buttonText={t('Launch Console')}
          buttonLink="https://console.vega.xyz/"
        />
      )}
    </>
  )
}

export default TradingRewards
