import React from "react";
import NavigationItem from "../Item";
import NavigationList from "../List";
import NavigationHeading from "../Heading";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Learn = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div>
        <NavigationHeading>
          <Trans t={t}>Explore</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("Key concepts")} link="/key-concepts" />
          <NavigationItem text={t("Vega papers")} link="/papers" />
          <NavigationItem
            text={t("Whitepaper")}
            link="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
          />
          <NavigationItem
            text={t("Technical overview")}
            link="https://vega.xyz/papers/vega-technical-overview.pdf"
          />
          <NavigationItem text={t("Talks")} link="/talks" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>
          <Trans t={t}>Latest</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("Blog")} link="https://blog.vega.xyz" />
        </NavigationList>
      </div>
    </div>
  );
};

export default Learn;
