import React from "react";
import NavigationItem from "../Item";
import NavigationHeading from "../Heading";
import NavigationList from "../List";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Governance = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div>
        <NavigationHeading>
          <Trans t={t}>Start</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("Governance on Vega")} link="/governance" />
          <NavigationItem text={t("Market creation")} link="/market-creation" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Govern</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t("Forum")}
            link="https://community.vega.xyz/c/governance/25"
          />
          <NavigationItem
            text={t("Governance dApp")}
            link="https://governance.vega.xyz/proposals"
          />
          <NavigationItem
            text={t("Governance documentation")}
            link="https://docs.vega.xyz/mainnet/concepts/vega-protocol"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Governance;
