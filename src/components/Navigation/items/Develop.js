import React from "react";
import NavigationItem from "../Item";
import NavigationList from "../List";
import NavigationHeading from "../Heading";

const Develop = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div>
        <NavigationHeading>Build</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Getting started" link="/develop" />
          <NavigationItem
            text="Github"
            link="https://github.com/vegaprotocol"
          />
          <NavigationItem text="Documentation" link="https://docs.vega.xyz" />
        </NavigationList>
      </div>
      <div>
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
      </div>
      <div>
        <NavigationHeading>Get rewarded</NavigationHeading>
        <NavigationList>
          <NavigationItem
            text="Incentives and bounties"
            link="/community/incentives-bounties"
          />
          <NavigationItem
            text="Report a security issue"
            link="/bug-bounties"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Develop;
