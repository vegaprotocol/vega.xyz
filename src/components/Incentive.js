import React from 'react'
import ButtonLink from './ButtonLink'
import SquareBullet from './Svg/SquareBullet'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Incentive = ({ title, type, status, reward, difficulty, link }) => {
  const { t } = useTranslation('component.incentive')
  const statusColours = {
    available: 'text-vega-mint',
    ended: 'text-vega-pink',
    inprogress: 'text-vega-mint',
    upcoming: 'text-vega-mid-grey',
  }

  const statusColour =
    statusColours[status.toString().toLowerCase().replace(/\s/g, '')]
  // t('Available')
  // t('Ended')
  // t('Bounty')
  // t('Incentive')

  return (
    <div
      className="relative border-t border-current pb-6 pt-7 last:pb-0"
      data-cy="incentive"
    >
      <div className="absolute left-0 top-0 bg-black px-2 text-[0.8125rem] uppercase text-white dark:bg-white dark:text-black">
        {t(type)}
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:mb-3">
          <div className="mb-1 pr-6 text-[1.375rem] leading-[1.3]">{title}</div>
          <span className={`text-[0.9375rem] ${statusColour}`}>
            <SquareBullet size="10" /> {t(status)}
          </span>
        </div>
        <div className="col-span-6 md:col-span-3">
          <span className="text-[0.9375rem] uppercase tracking-[0.01rem] text-vega-mid-grey">
            <Trans t={t}>Reward:</Trans>
          </span>
          <br />
          {reward}
        </div>
        {/* <div className="col-span-4 md:col-span-2">
          <span className="text-[0.9375rem] tracking-[0.01rem] text-vega-mid-grey uppercase">
            Difficulty:
          </span>
          <br />
          {difficulty}
        </div> */}
        <div className="col-span-6 text-right md:col-span-3">
          {link.toString() && (
            <ButtonLink
              className="bg-vega-light-grey dark:bg-vega-box-grey"
              link={link.toString()}
              text={t('View')}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Incentive
