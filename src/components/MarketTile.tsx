import React from 'react'
// import MarketBadge from './Svg/MarketBadge'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Pill from './UI/Pill'
import { marketTypeToShortName } from '../utils/vega/Markets'

const MarketTile = ({
  name,
  marketState,
  volume,
  formattedVolume,
  lastPrice,
  priceChange,
  sparkLineValues,
  marketType,
}) => {
  const gain = parseFloat(priceChange.replace('%', '')) > 0
  const { t } = useTranslation('component.market-tile')
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-vega-light-100 p-space-4 dark:bg-vega-dark-100">
      <div className="mb-space-6 gap-x-space-5">
        {/* <div>
          <MarketBadge />
        </div> */}
        <div>
          <div className="flex items-center justify-between">
            <div className="leading-none">{name}</div>
            {marketType && (
              <Pill active={true} inverse={true}>
                {marketTypeToShortName(marketType)}
              </Pill>
            )}
          </div>

          {marketState !== 'STATE_SUSPENDED' ? (
            <div className="text-vega-light-300 dark:text-vega-dark-300">
              Vol {formattedVolume}
            </div>
          ) : (
            <div className="heading-xxxs inline-block rounded-lg bg-vega-light-200  px-space-2 py-space-1 dark:bg-vega-dark-200">
              {t('Suspended')}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-end justify-between gap-x-space-3">
        <div className="body-xl !leading-none">{lastPrice}</div>
        {priceChange !== '0.00%' && (
          <div
            className={`body-m mt-space-1 !leading-none ${
              gain ? 'text-vega-green-550' : 'text-vega-pink'
            }`}
          >
            {priceChange}
          </div>
        )}
        <div className="min-h-[3rem] w-full max-w-[50%]">
          <Sparklines data={sparkLineValues}>
            <SparklinesLine color={`${gain ? '#01C566' : '#FF077F'}`} />
          </Sparklines>
        </div>
      </div>
    </div>
  )
}

export default MarketTile
