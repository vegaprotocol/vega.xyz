import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import MarketTile from '../MarketTile'
import Button from '../UI/Button'
import Pill from '../UI/Pill'
import 'swiper/swiper-bundle.css'

interface MarketDataEntry {
  title: string
  markets: React.ReactNode[]
}

const Markets = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [marketsData, setMarketsData] = useState<MarketDataEntry[]>([])
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false)
  const [isSwiperInit, setIsSwiperInit] = useState(false)
  const breakpointWidth = 768

  SwiperCore.use([Pagination])

  const tabs = ['Top volume', 'Top gainers', 'Top losers', 'New markets']

  const changeTab = (index) => {
    setActiveTab(index)
    setShowMarketsDropdown(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const shouldInitSwiper = window.innerWidth < breakpointWidth

      if (shouldInitSwiper && !isSwiperInit) {
        setIsSwiperInit(true)
      } else if (!shouldInitSwiper && isSwiperInit) {
        setIsSwiperInit(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isSwiperInit, breakpointWidth])

  useEffect(() => {
    let data: MarketDataEntry[] = []
    tabs.map((tab) => {
      data.push({
        title: tab,
        markets: [
          <MarketTile />,
          <MarketTile />,
          <MarketTile />,
          <MarketTile />,
        ],
      })
      setMarketsData(data)
    })
  }, [])

  return marketsData.length > 0 ? (
    <div>
      <div className="mb-space-5 grid grid-cols-2 md:flex md:items-center md:justify-between">
        <h2 className="heading-m">Markets</h2>

        <div className="hidden items-center gap-x-space-3 md:flex">
          {marketsData.map((group, index) => (
            <button key={index} onClick={() => setActiveTab(index)}>
              <Pill active={index === activeTab}>{group.title}</Pill>
            </button>
          ))}
        </div>

        <div className="relative z-10 md:hidden">
          <div className="absolute right-0 top-0 rounded-md border border-vega-light-200 bg-white py-space-1 dark:border-vega-dark-200 dark:bg-black">
            <div
              role="button"
              tabIndex={0}
              className="font-not-glitched heading-xxxs flex items-center justify-between gap-x-space-2 px-space-4 py-space-2"
              onClick={() => setShowMarketsDropdown(true)}
              onFocus={() => setShowMarketsDropdown(true)}
              onBlur={(e) => {
                if (!e.relatedTarget?.dataset?.changeMarket) {
                  setShowMarketsDropdown(false)
                }
              }}
            >
              <div>{marketsData[activeTab].title}</div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative -top-px"
              >
                <path
                  d="M0.619141 1.62L1.37914 0.869995L6.99914 6.5L12.6191 0.869995L13.3791 1.62L6.99914 8L0.619141 1.62Z"
                  fill="white"
                />
              </svg>
            </div>
            {showMarketsDropdown && (
              <div>
                {marketsData.map((group, index) => (
                  <button
                    role="button"
                    className="font-not-glitched heading-xxxs block w-full px-space-4 py-space-2 text-left hover:dark:bg-vega-dark-100 dark:hover:bg-vega-dark-100"
                    key={index}
                    onClick={() => changeTab(index)}
                    data-change-market
                  >
                    <div>{marketsData[index].title}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        {marketsData.map((group, index) => (
          <div
            key={index}
            className={`${activeTab === index ? 'block' : 'hidden'}`}
          >
            {isSwiperInit ? (
              <>
                <Swiper
                  slidesPerView={1.25}
                  spaceBetween={15}
                  pagination={{ clickable: true }}
                  className="market-swiper"
                >
                  {group.markets.map((market, index) => (
                    <SwiperSlide key={index}>{market}</SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <div className="mb-space-5 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {group.markets.map((market, index) => (
                  <div key={index}>{market}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <Button
        to="https://console.vega.xyz/"
        className="-translate-y-space-5 text-vega-dark-300 md:translate-y-0"
        variant="secondary"
      >
        View all
      </Button>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Markets
