import React from 'react'
import RewardBox from './RewardBox'
import { formatVegaValue } from '../../utils/tools'
import useRewardsTrading from '../../hooks/use-rewards-trading'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { routeThroughInterstitialPage } from '../../utils/tools'

const TradingRewards = () => {
  const { t } = useTranslation('component.rewards')
  const { rewards, loading, error } = useRewardsTrading()

  return (
    <>
      {rewards && (
        <RewardBox
          title={t('Trading')}
          rewardValue={formatVegaValue(rewards)}
          rewardValueQualifier="Average total paid out per epoch"
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of the total maker fees
                you've paid, in this epoch per market.
              </Trans>
            </div>
          }
          buttonText={t('Launch Console')}
          buttonLink={routeThroughInterstitialPage('https://vega.trading')}
        />
      )}
    </>
  )
}

export default TradingRewards
