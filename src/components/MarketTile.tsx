import React from 'react'
// import MarketBadge from './Svg/MarketBadge'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const MarketTile = ({
  name,
  volume,
  formattedVolume,
  lastPrice,
  priceChange,
  sparkLineValues,
}) => {
  const gain = parseFloat(priceChange.replace('%', '')) > 0
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-vega-light-100 p-space-4 dark:bg-vega-dark-100">
      <div className="mb-space-6 flex items-center gap-x-space-5">
        {/* <div>
          <MarketBadge />
        </div> */}
        <div>
          <div className="leading-none">{name}</div>
          {volume !== 0 && (
            <div className="text-vega-light-300 dark:text-vega-dark-300">
              Vol {formattedVolume}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-end justify-between gap-x-space-3">
        <div className="">
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
        </div>
        <div className="w-full max-w-[50%]">
          <Sparklines data={sparkLineValues}>
            <SparklinesLine color={`${gain ? '#01C566' : '#FF077F'}`} />
          </Sparklines>
        </div>
      </div>
    </div>
  )
}

export default MarketTile
