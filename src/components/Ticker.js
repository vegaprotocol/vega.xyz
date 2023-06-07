import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper'
import { MQMediumDown, MQLargeUp } from '../utils/media-queries.js'
import Numeral from 'react-numeral'
import 'swiper/css'
import 'swiper/css/effect-fade'

const Ticker = () => {
  const { t } = useTranslation('component.ticker')
  const [stats, setStats] = useState(0)

  const updateStats = ({ name, value }) => {
    setStats((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

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

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.GATSBY_VEGA_REST_API}/api/v2/epoch`),
      fetch(`${process.env.GATSBY_VEGA_REST_API}/statistics`),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json()
          })
        )
      })
      .then(function (data) {
        updateStats({
          name: 'validators',
          value: (
            <Numeral
              value={
                data[0].epoch.validators.filter(
                  (n) => n.rankingScore.votingPower > 0
                ).length
              }
              format={'0a'}
            />
          ),
        })

        updateStats({
          name: 'blockDuration',
          value: Math.round(data[1].statistics.blockDuration / 1000000) + 'ms',
        })

        updateStats({
          name: 'currentEpoch',
          value: data[0].epoch.seq,
        })

        let stakedTotal = new BigNumber(0)
        data[0].epoch.validators.forEach((validator) => {
          let validatorTotal = new BigNumber(validator.stakedTotal)
          stakedTotal = stakedTotal.plus(validatorTotal)
        })

        const stakedTotalVal = stakedTotal
          .dividedBy(Math.pow(10, 18))
          .dp(2)
          .toFormat(0, 1)

        if (stakedTotal.isGreaterThan(0)) {
          updateStats({
            name: 'stakedTotal',
            value: <Numeral value={stakedTotalVal} format={'0.0a'} />,
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      {stats ? (
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
                <TickerCell label={t('Validators')} value={stats.validators} />
              </SwiperSlide>
              <SwiperSlide>
                <TickerCell
                  label={t('Total Staked')}
                  value={stats.stakedTotal}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TickerCell
                  label={t('Avg. Block Time')}
                  value={stats.blockDuration}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TickerCell
                  label={t('Current Epoch')}
                  value={stats.currentEpoch}
                />
              </SwiperSlide>
            </Swiper>
          </MQMediumDown>
          <MQLargeUp>
            <div className="relative flex justify-center">
              <TickerCell label={t('Validators')} value={stats.validators} />
              <TickerCell label={t('Total Staked')} value={stats.stakedTotal} />
              <TickerCell
                label={t('Avg. Block Time')}
                value={stats.blockDuration}
              />
              <TickerCell
                label={t('Current Epoch')}
                value={stats.currentEpoch}
              />
            </div>
          </MQLargeUp>
        </div>
      ) : (
        <div className="flex h-[5.625rem] items-center justify-center border-current text-center text-[1.875rem] uppercase leading-none">
          <div>LOADING...</div>
        </div>
      )}
    </div>
  )
}

export default Ticker
