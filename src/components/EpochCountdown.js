import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const EpochCountdown = () => {
  const { t } = useTranslation("component.epoch-countdown");
  const [timeRemainingString, setTimeRemainingString] = useState(null);
  const [percentageComplete, setPercentageComplete] = useState(0);
  const [resetCounter, setResetCounter] = useState(false);

  useEffect(() => {
    const formatResponse = (response) => {
      const startTime = (
        response.epoch.timestamps.startTime / 1000000000
      ).toFixed();
      const endTime = (
        response.epoch.timestamps.expiryTime / 1000000000
      ).toFixed();
      const currentTime = (new Date().getTime() / 1000).toFixed();

      return {
        startTime: startTime,
        endTime: endTime,
        currentTime: currentTime,
        timeRemaining: endTime - currentTime,
        epochLength: endTime - startTime,
      };
    };

    const formatTimeString = (days, hours, minutes, seconds) => {
      let timeString = "";
      timeString = days ? days + "d " : " ";
      timeString += !days && !hours ? " " : hours + "h ";
      timeString += !minutes && !hours && !days ? "" : minutes + "m ";
      timeString += seconds + "s";
      return timeString;
    };

    const updateCounter = (timeRemaining, epochLength) => {
      let seconds = timeRemaining;
      const days = Math.floor(seconds / (3600 * 24));
      seconds -= days * 3600 * 24;
      const hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      const minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      setTimeRemainingString(formatTimeString(days, hours, minutes, seconds));

      setPercentageComplete(
        (((epochLength - timeRemaining) / epochLength) * 100).toFixed(2)
      );
    };

    let interval;

    async function fetchEpochs() {
      let response = await fetch("https://api.token.vega.xyz/epochs");
      response = await response.json();
      let { timeRemaining, epochLength } = formatResponse(response);

      interval = setInterval(function () {
        // reload if counter expires
        if (timeRemaining === 1) {
          setResetCounter(!resetCounter);
        }
        updateCounter(--timeRemaining, epochLength);
      }, 1000);
    }
    fetchEpochs();

    return () => clearInterval(interval);
  }, [resetCounter]);

  return (
    <div>
      <div
        className={`transition text-[1.3125rem] font-glitched mb-4 ${
          timeRemainingString ? `` : `opacity-0`
        }`}
      >
        {timeRemainingString}{" "}
        <span className="text-vega-mid-grey">
          <Trans t={t}>until the end of this epoch</Trans>
        </span>
      </div>
      <div className="dark:bg-vega-box-grey bg-vega-grey w-full h-[4px] relative rounded-full">
        <div
          className="transition-all duration-1000 bg-countdownBar absolute top-0 bottom-0 left-0 rounded-full w-0 max-w-full"
          style={{ width: `${percentageComplete}%` }}
        ></div>
      </div>
    </div>
  );
};

export default EpochCountdown;
