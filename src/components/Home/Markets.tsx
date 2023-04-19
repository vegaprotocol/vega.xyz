import React from 'react'
import MarketTile from '../MarketTile'
import Button from '../UI/Button'

const Markets = () => {
  return (
    <div className="py-space-8 md:py-space-12 lg:py-space-14 ">
      <h2 className="heading-m mb-space-5">Markets</h2>

      <div className="mb-space-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <MarketTile />
        <MarketTile />
        <MarketTile />
        <MarketTile />
      </div>

      <Button
        to="https://console.vega.xyz/"
        className="text-vega-dark-300"
        variant="secondary"
      >
        View all
      </Button>
    </div>
  )
}

export default Markets
