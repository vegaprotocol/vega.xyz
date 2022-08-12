import React, { useState, useEffect } from "react";
import TickerCell from "./TickerCell";
import BigNumber from "bignumber.js";
import Marquee from "react-fast-marquee";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Ticker = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState(0);

  const updateStats = ({ name, value }) => {
    setStats((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    <div className="overflow-hidden whitespace-nowrap border-t border-b border-current">
      {stats ? (
        <div className="relative">
          <div className="absolute flex items-center z-10 h-[5rem] md:h-[5.625rem] left-0 top-0 bg-black dark:bg-white text-white dark:text-black text-[1.5rem] lg:text-[1.875rem] leading-none uppercase px-3 md:px-6 py-2 md:py-4 w-[9rem] md:w-[12.5rem]">
            <Trans>Status</Trans>:
            <br />
            Mainnet
          </div>
          <Marquee
            speed={60}
            gradient={false}
            pauseOnHover={true}
            className="pl-[12.5rem]"
          >
            <div className="flex h-[5rem] md:h-[5.625rem] border-r border-current">
              <TickerCell title={t("Validators")} value={stats.validators} />
              <TickerCell title={t("Total Staked")} value={stats.stakedTotal} />
              <TickerCell
                title={t("Avg. Block Time")}
                value={stats.blockDuration}
              />
              <TickerCell
                title={t("Current Epoch")}
                value={stats.currentEpoch}
              />
              <TickerCell
                text={t("Learn more about restricted mainnet")}
                link="https://blog.vega.xyz/what-to-expect-from-restricted-mainnet-616086d9fdaf"
              />
            </div>
          </Marquee>
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
