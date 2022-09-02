import React from "react";
import NavigationItem from "../Item";
import NavigationList from "../List";
import NavigationHeading from "../Heading";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Develop = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div>
        <NavigationHeading>
          <Trans t={t}>Build</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("Getting started")} link="/develop" />
          <NavigationItem
            text={t("Github")}
            link="https://github.com/vegaprotocol"
          />
          <NavigationItem
            text={t("Documentation")}
            link="https://docs.vega.xyz"
          />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Contribute</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t("Ambassador program")}
            link="/community/ambassadors/"
          />
          <NavigationItem
            text={t("Builders club")}
            link="https://vega.xyz/discord"
          />
          <NavigationItem text={t("Careers")} link="/careers" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Get rewarded</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t("Incentives and bounties")}
            link="/community/incentives-bounties"
          />
          <NavigationItem
            text={t("Report a security issue")}
            link="/bug-bounties"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Develop;
