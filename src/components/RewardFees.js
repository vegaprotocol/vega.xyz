import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import RewardsValuePlaceholder from "../components/Svg/RewardsValuePlaceholder";
import UIButton from "./UI/Button";

const formatVegaValue = (value) => {
  return `${(parseInt(value) / 1000000000000000000).toFixed(2)} $VEGA`;
};

const RewardBox = ({
  title,
  rewardValue,
  rewardValueQualifier,
  description,
  buttonText,
  buttonLink,
}) => {
  const { t } = useTranslation("component.reward-fees");

  return (
    <div className="flex flex-col justify-between border border-vega-border-muted p-4 [&:nth-child(1)_.reward-value]:bg-moshed [&:nth-child(2)_.reward-value]:bg-moshed2 [&:nth-child(3)_.reward-value]:bg-moshed3">
      <div>
        <div className="title-s mb-6">{title}</div>
        <div
          className={`reward-value mb-2 bg-cover bg-clip-text text-[2.5rem] leading-none text-transparent`}
        >
          <div>
            {rewardValue === null || rewardValue === 0 ? (
              <RewardsValuePlaceholder />
            ) : (
              formatVegaValue(rewardValue)
            )}
          </div>
        </div>
        {rewardValueQualifier && (
          <div className="mb-4 text-[1.125rem] leading-tight text-vega-grey">
            {rewardValue === null || rewardValue === 0 ? (
              t("Coming soon")
            ) : (
              <div>{rewardValueQualifier}</div>
            )}
          </div>
        )}
        <div className="mb-6">{description}</div>
      </div>
      <UIButton width="full" to={buttonLink}>
        {buttonText}
      </UIButton>
    </div>
  );
};

const RewardFees = () => {
  const { t } = useTranslation("component.reward-fees");

  const [rewardValues, setrewardValues] = useState({
    makerPaidFeeReward: null,
    lpFeeReward: null,
    marketProposerReward: null,
  });

  useEffect(() => {
    async function fetchRewardFees() {
      try {
        let response = await fetch(
          "https://api.n07.testnet.vega.xyz/api/v2/rewards?pagination.first=2000"
        );
        response = await response.json();
        let makerPaidFeeReward = 0;
        let lpFeeReward = 0;
        let marketProposerReward = 0;
        let epoch;
        let period = 7;
        let max_epoch = -1;

        response.rewards.edges.forEach((node) => {
          epoch = node.node.epoch;
          if (Number(epoch) > max_epoch) {
            max_epoch = Number(epoch);
          }
        });

        response.rewards.edges.forEach((node) => {
          epoch = Number(node.node.epoch);

          if (epoch <= max_epoch && epoch > max_epoch - period) {
            if (
              node.node.rewardType === "ACCOUNT_TYPE_REWARD_MAKER_PAID_FEES"
            ) {
              makerPaidFeeReward += Number(node.node.amount);
            } else if (node.node.rewardType === "ACCOUNT_TYPE_FEES_LIQUIDITY") {
              lpFeeReward += Number(node.node.amount);
            } else if (
              node.node.rewardType === "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"
            ) {
              marketProposerReward += Number(node.node.amount);
            }
          }
        });

        setrewardValues({
          makerPaidFeeReward: (makerPaidFeeReward /= period),
          lpFeeReward: (lpFeeReward /= period),
          marketProposerReward: (marketProposerReward /= period),
        });
      } catch (error) {
        setrewardValues({
          makerPaidFeeReward: null,
          lpFeeReward: null,
          marketProposerReward: null,
        });
      }
    }
    fetchRewardFees();
  }, []);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
        <RewardBox
          idx={0}
          title={t("Trading")}
          rewardValue={rewardValues.makerPaidFeeReward}
          rewardValueQualifier="Average total paid out per epoch"
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of the total maker fees
                you've paid, in this epoch per market.
              </Trans>
            </div>
          }
          buttonText={t("Trade")}
          buttonLink="https://console.fairground.wtf/"
        />
        <RewardBox
          idx={1}
          title={t("Liquidity Provision")}
          rewardValue={rewardValues.lpFeeReward}
          rewardValueQualifier="Average total paid out per epoch"
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Distributed based on the proportion of the total liquidity and
                maker fees you have received, in this epoch per market.
              </Trans>
            </div>
          }
          buttonText={t("Provide liquidity")}
          buttonLink="https://docs.vega.xyz/docs/testnet/tutorials/providing-liquidity"
        />
        <RewardBox
          idx={2}
          title={t("Market Creation")}
          rewardValue={rewardValues.marketProposerReward}
          rewardValueQualifier="Average total paid out per epoch"
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                For markets that meet the threshold value in a month. The
                current threshold is 1 $VEGA
              </Trans>
            </div>
          }
          buttonText={t("Create a market")}
          buttonLink="/market-creation"
        />
      </div>
    </div>
  );
};

export default RewardFees;
