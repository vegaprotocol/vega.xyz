import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { formatVegaValue } from '../../utils/tools'
import RewardsValuePlaceholder from '../../components/Svg/RewardsValuePlaceholder'
import UIButton from '../UI/Button'

interface RewardBoxProps {
  title: string
  rewardValue: string | number | null
  rewardValueQualifier: string
  description: React.ReactNode
  buttonText: string
  buttonLink: string
}

const RewardBox = ({
  title,
  rewardValue,
  rewardValueQualifier,
  description,
  buttonText,
  buttonLink,
}: RewardBoxProps) => {
  const { t } = useTranslation('component.reward-fees')

  return (
    <div className="flex flex-col justify-between border border-vega-border-muted p-4 [&:nth-child(1)_.reward-value]:bg-moshed [&:nth-child(2)_.reward-value]:bg-moshed2 [&:nth-child(3)_.reward-value]:bg-moshed3">
      <div>
        <div className="title-s mb-6">{title}</div>
        <div
          className={`reward-value mb-2 bg-cover bg-clip-text text-[2.5rem] leading-none text-transparent`}
        >
          <div>
            {rewardValue === null || rewardValue === 0 ? (
              <RewardsValuePlaceholder />
            ) : (
              formatVegaValue(rewardValue)
            )}
          </div>
        </div>
        {rewardValueQualifier && (
          <div className="mb-4 text-[1.125rem] leading-tight text-vega-grey">
            {rewardValue === null || rewardValue === 0 ? (
              t('Coming soon')
            ) : (
              <div>{rewardValueQualifier}</div>
            )}
          </div>
        )}
        <div className="mb-6">{description}</div>
      </div>
      <UIButton width="full" to={buttonLink}>
        {buttonText}
      </UIButton>
    </div>
  )
}

export default RewardBox
