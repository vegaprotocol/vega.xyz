import React, { useMemo, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import LiquidtyTile from '../LiquidityTile'
import Button from '../UI/Button'
import Container from '../Container'
import Pill from '../UI/Pill'
import { useMarkets, validMarketStates } from '../../hooks/use-markets'
import { useYesterday } from '../../hooks/use-yesterday'

interface MarketDataEntry {
  title: string
  markets: React.ReactNode[]
}

const LiquidityProvision = () => {
  const { t } = useTranslation('component.liquidity-provision')
  const [activeTab, setActiveTab] = useState(0)
  const [marketsData, setMarketsData] = useState<MarketDataEntry[]>([])
  const [showMarketsDropdown, setShowMarketsDropdown] = useState(false)
  const [isSwiperInit, setIsSwiperInit] = useState(false)
  const breakpointWidth = 768

  const changeTab = (index) => {
    setActiveTab(index)
    setShowMarketsDropdown(false)
  }

  SwiperCore.use([Pagination])

  const yesterday = useYesterday()
  const yTimestamp = useMemo(() => {
    return new Date(yesterday).toISOString()
  }, [yesterday])
  const { data, loading, error } = useMarkets(yTimestamp)

  useEffect(() => {
    if (!loading && !error && data) {
      const filteredMarkets = data?.marketsConnection?.edges.filter(
        (market) => {
          const marketState = market.node.data.marketState
          return validMarketStates.includes(marketState)
        }
      )

      const filterByProductType = (productType, markets) => {
        return markets.filter(
          (item) =>
            item.node &&
            item.node.data &&
            item.node.data.market &&
            item.node.data.market.tradableInstrument &&
            item.node.data.market.tradableInstrument.instrument &&
            item.node.data.market.tradableInstrument.instrument.product &&
            item.node.data.market.tradableInstrument.instrument.product
              .__typename === productType
        )
      }

      const all = filteredMarkets.slice(0, 4) || []
      const futures =
        filterByProductType('Future', filteredMarkets).slice(0, 4) || []
      const perps =
        filterByProductType('Perpetual', filteredMarkets).slice(0, 4) || []

      const tabs = [
        {
          title: 'All',
          markets: all.map((market) => (
            <LiquidtyTile marketId={market.node.data.market.id} />
          )),
        },
        {
          title: 'FUTR',
          markets: futures.map((market) => (
            <LiquidtyTile marketId={market.node.data.market.id} />
          )),
        },
        {
          title: 'PERP',
          markets: perps.map((market) => (
            <LiquidtyTile marketId={market.node.data.market.id} />
          )),
        },
      ]

      if ([filteredMarkets].some((array) => array.length > 0)) {
        setMarketsData(tabs)
      } else {
        setMarketsData([])
      }
    } else {
      setMarketsData([])
    }
  }, [data, loading, error])

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

  return marketsData.length > 0 ? (
    <div>
      <Container>
        <div className="mb-space-5 flex flex grid grid-cols-2 flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <h2 className="heading-m">
            <Trans t={t}>Liquidity Provision on Vega</Trans>
          </h2>

          <div className="flex items-center justify-end gap-x-space-3">
            {marketsData.map((group, index) => (
              <button key={index} onClick={() => setActiveTab(index)}>
                <Pill active={index === activeTab}>{group.title}</Pill>
              </button>
            ))}
          </div>

          <div className="relative z-10 hidden md:hidden">
            <div className="absolute right-0 top-0 rounded-md border border-vega-light-200 bg-white py-space-1 dark:border-vega-dark-200 dark:bg-black">
              <div
                role="button"
                tabIndex={0}
                className="font-not-glitched heading-xxxs touch-action-manipulation flex items-center justify-between gap-x-space-2 px-space-4 py-space-2"
                onClick={() => setShowMarketsDropdown(true)}
                onTouchStart={() => setShowMarketsDropdown(true)}
                onFocus={() => setShowMarketsDropdown(true)}
                onBlur={(e) => {
                  if (
                    !(e.relatedTarget as HTMLElement)?.dataset?.changeMarket
                  ) {
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
                <div className="relative">
                  {marketsData.map((group, index) => (
                    <button
                      role="button"
                      className="font-not-glitched heading-xxxs touch-action-manipulation block w-full cursor-pointer px-space-4 py-space-2 text-left hover:dark:bg-vega-dark-100 dark:hover:bg-vega-dark-100"
                      key={index}
                      aria-label="Change market"
                      onClick={() => changeTab(index)}
                      onTouchStart={() => changeTab(index)}
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
      </Container>

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
                  slidesOffsetBefore={15}
                  pagination={{ clickable: true }}
                  className="market-swiper"
                >
                  {group.markets.map((market, index) => (
                    <SwiperSlide key={index}>{market}</SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <Container>
                <div className="mb-space-5 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {group.markets.map((market, index) => (
                    <div key={index}>{market}</div>
                  ))}
                </div>
              </Container>
            )}
          </div>
        ))}
      </div>

      <Container>
        <Button
          to="/liquidity-provision"
          className="relative z-10 -translate-y-space-5 text-vega-dark-300 md:translate-y-0"
          variant="secondary"
        >
          View all
        </Button>
      </Container>
    </div>
  ) : null
}

export default LiquidityProvision
