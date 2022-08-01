import React from "react";
import NavigationItem from "../Item";
import NavigationHeading from "../Heading";
import NavigationList from "../List";

const Community = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <NavigationHeading>Meet</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Use the network" link="/use" />
          <NavigationItem text="Get the Vega Wallet" link="/wallet" />
          <NavigationItem
            text="Experiment on Fairground Testnet"
            link="https://fairground.wtf"
          />
        </NavigationList>
      </div>
      <div className="col-span-4">
        <NavigationHeading>Join</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Discord" link="https://vega.xyz/discord" />
          <NavigationItem text="Forum" link="https://community.vega.xyz/" />
          <NavigationItem text="Telegram" link="https://t.me/vegacommunity" />
          <NavigationItem
            text="Twitter"
            link="https://twitter.com/vegaprotocol"
          />
          <NavigationItem
            text="Substack"
            link="https://vegacommunity.substack.com/subscribe"
          />
          <NavigationItem
            text="Twitch"
            link="https://www.twitch.tv/vegaprotocol"
          />
        </NavigationList>
      </div>
      <div className="col-span-4">
        <NavigationHeading>Contribute</NavigationHeading>
        <NavigationList>
          <NavigationItem
            text="Ambassador program"
            link="/community/ambassadors/"
          />
          <NavigationItem
            text="Builders club"
            link="https://vega.xyz/discord"
          />
        </NavigationList>
        <NavigationHeading>Get rewarded</NavigationHeading>
        <NavigationList>
          <NavigationItem
            text="Incentives and bounties"
            link="/community/incentives-bounties/"
          />
          <NavigationItem text="Get Swag" link="/community/swag" />
          <NavigationItem
            text="Experiment on Fairground Testnet"
            link="https://fairground.wtf"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Community;
