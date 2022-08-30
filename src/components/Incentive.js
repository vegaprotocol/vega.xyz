import React from "react";
import ButtonLink from "./ButtonLink";
import SquareBullet from "./Svg/SquareBullet";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Incentive = ({ title, type, status, reward, difficulty, link }) => {
  const { t } = useTranslation("component.incentive");
  const statusColours = {
    available: "text-vega-mint",
    ended: "text-vega-pink",
    inprogress: "text-vega-mint",
    upcoming: "text-vega-mid-grey",
  };

  const statusColour =
    statusColours[status.toString().toLowerCase().replace(/\s/g, "")];

  return (
    <div
      className="relative pb-6 pt-7 last:pb-0 border-t border-current"
      data-cy="incentive"
    >
      <div className="text-[0.8125rem] absolute left-0 top-0 px-2 dark:text-black text-white bg-black dark:bg-white uppercase">
        {t(type)}
        /* t('Bounty') t('Incentive') */
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:mb-3 md:col-span-6">
          <div className="text-[1.375rem] leading-[1.3] mb-1 pr-6">{title}</div>
          <span className={`text-[0.9375rem] ${statusColour}`}>
            <SquareBullet size="10" /> {t(status)}
            /* t('Available') t('Ended') */
          </span>
        </div>
        <div className="col-span-6 md:col-span-3">
          <span className="text-[0.9375rem] tracking-[0.01rem] text-vega-mid-grey uppercase">
            <Trans t={t}>Reward:</Trans>
          </span>
          <br />
          {reward}
        </div>
        {/* <div className="col-span-4 md:col-span-2">
          <span className="text-[0.9375rem] tracking-[0.01rem] text-vega-mid-grey uppercase">
            Difficulty:
          </span>
          <br />
          {difficulty}
        </div> */}
        <div className="col-span-6 text-right md:col-span-3">
          {link.toString() && (
            <ButtonLink
              className="bg-vega-light-grey dark:bg-vega-box-grey"
              link={link.toString()}
              text={t("View")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Incentive;
