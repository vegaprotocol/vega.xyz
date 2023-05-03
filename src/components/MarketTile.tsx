import React from 'react'
import MarketBadge from './Svg/MarketBadge'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { formatNumberWithSuffix } from '../utils/tools'

const MarketTile = ({
  name,
  volume,
  lastPrice,
  priceChange,
  sparkLineValues,
}) => {
  const gain = parseFloat(priceChange.replace('%', '')) > 0
  return (
    <div className="flex flex-col justify-between rounded-lg bg-vega-light-100 p-space-4 dark:bg-vega-dark-100">
      <div className="mb-space-6 flex items-center gap-x-space-5">
        {/* <div>
          <MarketBadge />
        </div> */}
        <div>
          <div className="leading-none">{name}</div>
          <div className="text-vega-light-300 dark:text-vega-dark-300">
            Vol {formatNumberWithSuffix(volume)}
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="">
          <div className="body-xl !leading-none">{lastPrice}</div>
          <div
            className={`body-m ${gain ? 'text-vega-mint' : 'text-vega-pink'}`}
          >
            {priceChange}
          </div>
        </div>
        <div className="w-full max-w-[50%]">
          <Sparklines data={sparkLineValues}>
            <SparklinesLine color={`${gain ? '#00F780' : '#FF077F'}`} />
          </Sparklines>
        </div>
      </div>
    </div>
  )
}

export default MarketTile
