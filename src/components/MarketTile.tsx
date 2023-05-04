import React from 'react'
// import MarketBadge from './Svg/MarketBadge'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { formatNumberWithSuffix } from '../utils/tools'
import { addDecimalsFormatNumber } from '@vegaprotocol/utils'

const MarketTile = ({
  name,
  volume,
  lastPrice,
  priceChange,
  sparkLineValues,
  decimals,
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
          <div className="body-xl !leading-none">
            {addDecimalsFormatNumber(lastPrice, decimals)}
          </div>
          <div
            className={`body-m mt-space-1 !leading-none ${
              gain ? 'text-vega-green-550' : 'text-vega-pink'
            }`}
          >
            {priceChange}
          </div>
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
