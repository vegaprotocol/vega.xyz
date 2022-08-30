import React, { useState, useEffect } from "react";
import BigNumber from "bignumber.js";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Ticker = () => {
  const { t } = useTranslation("component.ticker");
  const [stats, setStats] = useState(0);

  const updateStats = ({ name, value }) => {
    setStats((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const TickerCell = ({ label, value }) => {
    return (
      <div className="text-center">
        <div className="text-[3.375rem] md:[2.75rem] lg:[3.375rem]">
          {value}
        </div>
        <div className="text-[0.9375rem] uppercase text-vega-grey">{label}</div>
      </div>
    );
  };

  useEffect(() => {
    Promise.all([
      fetch(`https://api.token.vega.xyz/epochs`),
      fetch(`https://api.token.vega.xyz/statistics`),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        updateStats({
          name: "validators",
          value: data[0].epoch.validators.length,
        });

        updateStats({
          name: "blockDuration",
          value: Math.round(data[1].statistics.blockDuration / 1000000) + "ms",
        });

        updateStats({
          name: "currentEpoch",
          value: data[0].epoch.seq,
        });

        let stakedTotal = new BigNumber(0);
        data[0].epoch.validators.forEach((validator) => {
          let validatorTotal = new BigNumber(validator.stakedTotal);
          stakedTotal = stakedTotal.plus(validatorTotal);
        });

        if (stakedTotal.isGreaterThan(0)) {
          updateStats({
            name: "stakedTotal",
            value: stakedTotal.dividedBy(Math.pow(10, 18)).dp(2).toFormat(0, 1),
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      {stats ? (
        <div className="relative flex justify-center gap-12">
          <TickerCell label={t("Validators")} value={stats.validators} />
          <TickerCell label={t("Total Staked")} value={stats.stakedTotal} />
          <TickerCell
            label={t("Avg. Block Time")}
            value={stats.blockDuration}
          />
          <TickerCell label={t("Current Epoch")} value={stats.currentEpoch} />
        </div>
      ) : (
        <div className="flex h-[5.625rem] border-current items-center justify-center text-[1.875rem] leading-none uppercase text-center">
          <div>LOADING...</div>
        </div>
      )}
    </div>
  );
};

export default Ticker;
