import React from 'react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper'
import { MQMediumDown, MQLargeUp } from '../../utils/media-queries'
import useTotalVolume from '../../hooks/statistics/use-total-volume'
import useTotalMarkets from '../../hooks/statistics/use-total-markets'
import useUsers from '../../hooks/statistics/use-users'
import useTvl from '../../hooks/statistics/use-tvl'
import useBlockTime from '../../hooks/statistics/use-block-time'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { formatNumberWithSuffix } from '../../utils/tools'

const Statistics = () => {
  const { t } = useTranslation('component.statistics')
  const {
    totalVolume,
    loading: totalVolumeLoading,
    error: totalVolumeError,
  } = useTotalVolume()
  const {
    totalMarkets,
    loading: totalMarketsLoading,
    error: totalMarketsError,
  } = useTotalMarkets()
  const { users, loading: usersLoading, error: usersError } = useUsers()
  const { tvl, loading: tvlLoading, error: tvlError } = useTvl()
  const {
    blockTime,
    loading: blockTimeLoading,
    error: blockTimeError,
  } = useBlockTime()

  let priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  const TickerCell = ({ label, value }) => {
    return (
      <div className="relative bg-white px-space-6 text-center after:absolute after:top-0 after:bottom-0 after:right-0 after:w-px after:bg-vega-light-200 after:content-[''] last:after:hidden dark:bg-black dark:after:bg-vega-dark-200">
        <div className="mb-space-3 text-[3.375rem] leading-none md:text-[2.75rem] xl:text-[3.375rem]">
          {value}
        </div>
        <div className="mx-auto max-w-[10rem] whitespace-normal text-[0.9375rem] uppercase leading-none text-vega-grey">
          {label}
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div>
        <MQMediumDown>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            speed={1200}
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
          >
            <SwiperSlide>
              {totalVolume && (
                <TickerCell
                  label={t('Total Volume')}
                  value={formatNumberWithSuffix(totalVolume, 1)}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {totalMarkets && (
                <TickerCell label={t('Total Markets')} value={totalMarkets} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {users && <TickerCell label={t('Users')} value={users} />}
            </SwiperSlide>
            <SwiperSlide>
              {tvl && (
                <TickerCell
                  label={t('TVL')}
                  value={`$${formatNumberWithSuffix(Math.round(tvl), 2)}`}
                />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {blockTime && (
                <TickerCell label={t('Avg. Block Time')} value={blockTime} />
              )}
            </SwiperSlide>
          </Swiper>
        </MQMediumDown>
        <MQLargeUp>
          <div className="relative flex justify-center">
            {totalVolume && (
              <TickerCell
                label={t('Total Volume')}
                value={formatNumberWithSuffix(totalVolume, 1)}
              />
            )}
            {totalMarkets && (
              <TickerCell label={t('Total Markets')} value={totalMarkets} />
            )}
            {users && <TickerCell label={t('Users')} value={users} />}
            {tvl && (
              <TickerCell
                label={t('TVL')}
                value={`$${formatNumberWithSuffix(Math.round(tvl), 2)}`}
              />
            )}
            {blockTime && (
              <TickerCell label={t('Avg. Block Time')} value={blockTime} />
            )}
          </div>
        </MQLargeUp>
      </div>
    </div>
  )
}

export default Statistics
