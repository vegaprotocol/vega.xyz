import React from 'react'
import RewardBox from './RewardBox'
import useRewardsLiquidityProvision from '../../hooks/use-rewards-liquidity-provision'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const LiquidityProvisionRewards = () => {
  const { t } = useTranslation('component.rewards')
  const { rewards, loading, error } = useRewardsLiquidityProvision()

  return (
    <>
      {rewards !== null && (
        <RewardBox
          title={t('Liquidity Provision')}
          rewardValue={rewards}
          rewardValueQualifier={t('Average total paid out per epoch')}
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of total liquidity provider
                fees you've received in this epoch.
              </Trans>
            </div>
          }
          buttonText={t('Provide liquidity')}
          buttonLink="https://docs.vega.xyz/mainnet/concepts/liquidity/provision"
        />
      )}
    </>
  )
}

export default LiquidityProvisionRewards
