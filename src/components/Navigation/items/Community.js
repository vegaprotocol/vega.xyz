import React from "react";
import NavigationItem from "../Item";
import NavigationHeading from "../Heading";
import NavigationList from "../List";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Community = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <div className="lg:grid lg:grid-cols-12 gap-6">
      <div className="lg:col-span-4">
        <NavigationHeading>
          <Trans t={t}>Meet</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("The Vega Community")} link="/community" />
          <NavigationItem
            text={t("Events and meetups")}
            link="/community/events"
          />
          <NavigationItem
            text={t("Contributors")}
            link="/community/contributors"
          />
        </NavigationList>
      </div>
      <div className="lg:col-span-4">
        <NavigationHeading>Join</NavigationHeading>
        <NavigationList>
          <NavigationItem text={t("Discord")} link="https://vega.xyz/discord" />
          <NavigationItem
            text={t("Forum")}
            link="https://community.vega.xyz/"
          />
          <NavigationItem
            text={t("Telegram")}
            link="https://t.me/vegacommunity"
          />
          <NavigationItem
            text={t("Twitter")}
            link="https://twitter.com/vegaprotocol"
          />
          <NavigationItem
            text={t("Substack")}
            link="https://vegacommunity.substack.com/subscribe"
          />
          <NavigationItem
            text={t("Twitch")}
            link="https://www.twitch.tv/vegaprotocol"
          />
        </NavigationList>
      </div>
      <div className="lg:col-span-4">
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
          <NavigationItem
            text={t("Careers")}
            link="/careers"
          />
        </NavigationList>
        <NavigationHeading>
          <Trans>Get rewarded</Trans>
        </NavigationHeading>
        <NavigationList>
          <NavigationItem
            text={t("Incentives and bounties")}
            link="/community/incentives-bounties/"
          />
          <NavigationItem
            text={t("Report a security issue")}
            link="/bug-bounties"
          />
          <NavigationItem text={t("Get Swag")} link="/community/swag" />
          <NavigationItem
            text={t("Experiment on Fairground Testnet")}
            link="https://fairground.wtf"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Community;
