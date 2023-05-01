import React from 'react'
import MarketBadge from './Svg/MarketBadge'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const MarketTile = () => {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-vega-light-100 p-space-4 dark:bg-vega-dark-100">
      <div className="mb-space-6 flex items-center gap-x-space-5">
        <div>
          <MarketBadge />
        </div>
        <div>
          <div className="leading-none">USDT/GBP</div>
          <div className="text-vega-light-300 dark:text-vega-dark-300">
            Vol 8.7M
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="">
          <div className="body-xl !leading-none">0.8198</div>
          <div className="body-m text-vega-mint">+0.23%</div>
        </div>
        <div className="w-full max-w-[50%]">
          <Sparklines data={[5, 10, 5, 22, 3, 4, 9, 20]}>
            <SparklinesLine color="#00F780" />
          </Sparklines>
        </div>
      </div>
    </div>
  )
}

export default MarketTile
