import React, { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const EpochCountdown = () => {
  const { t } = useTranslation('component.epoch-countdown')
  const [timeRemainingString, setTimeRemainingString] = useState(null)
  const [percentageComplete, setPercentageComplete] = useState(0)
  const [resetCounter, setResetCounter] = useState(false)

  useEffect(() => {
    const formatResponse = (response) => {
      const startTime = (
        response.epoch.timestamps.startTime / 1000000000
      ).toFixed()
      const endTime = (
        response.epoch.timestamps.expiryTime / 1000000000
      ).toFixed()
      const currentTime = (new Date().getTime() / 1000).toFixed()

      return {
        startTime: startTime,
        endTime: endTime,
        currentTime: currentTime,
        timeRemaining: endTime - currentTime,
        epochLength: endTime - startTime,
      }
    }

    const formatTimeString = (days, hours, minutes, seconds) => {
      let timeString = ''
      timeString = days ? days + 'd ' : ' '
      timeString += !days && !hours ? ' ' : hours + 'h '
      timeString += !minutes && !hours && !days ? '' : minutes + 'm '
      timeString += seconds + 's'
      return timeString
    }

    const updateCounter = (timeRemaining, epochLength) => {
      let seconds = timeRemaining
      const days = Math.floor(seconds / (3600 * 24))
      seconds -= days * 3600 * 24
      const hours = Math.floor(seconds / 3600)
      seconds -= hours * 3600
      const minutes = Math.floor(seconds / 60)
      seconds -= minutes * 60
      setTimeRemainingString(formatTimeString(days, hours, minutes, seconds))

      setPercentageComplete(
        (((epochLength - timeRemaining) / epochLength) * 100).toFixed(2)
      )
    }

    let interval

    async function fetchEpochs() {
      let response = await fetch('https://api.vega.community/api/v2/epoch')
      response = await response.json()
      let { timeRemaining, epochLength } = formatResponse(response)

      interval = setInterval(function () {
        // reload if counter expires
        if (timeRemaining === 1) {
          setResetCounter(!resetCounter)
        }
        updateCounter(--timeRemaining, epochLength)
      }, 1000)
    }
    fetchEpochs()

    return () => clearInterval(interval)
  }, [resetCounter])

  return (
    <div>
      <div
        className={`heading-xs transition ${
          timeRemainingString ? `` : `opacity-0`
        }`}
      >
        {timeRemainingString}{' '}
        <span className="text-vega-light-300 dark:text-vega-dark-300">
          <Trans t={t}>until the end of this epoch</Trans>
        </span>
      </div>
      <div className="relative mt-space-4 h-[4px] w-full rounded-full bg-vega-grey dark:bg-vega-box-grey">
        <div
          className="absolute top-0 bottom-0 left-0 w-0 max-w-full rounded-full bg-countdownBar transition-all duration-1000"
          style={{ width: `${percentageComplete}%` }}
        ></div>
      </div>
    </div>
  )
}

export default EpochCountdown
