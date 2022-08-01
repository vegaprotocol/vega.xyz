import React from "react";
import NavigationItem from "../Item";
import NavigationHeading from "../Heading";
import NavigationList from "../List";

const Governance = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-6">
      <div>
        <NavigationHeading>Start</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Governance on Vega" link="/governance" />
          <NavigationItem text="Market creation" link="/market-creation" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>Govern</NavigationHeading>
        <NavigationList>
          <NavigationItem
            text="Forum"
            link="https://community.vega.xyz/c/governance/25"
          />
          <NavigationItem
            text="Governance dApp"
            link="https://token.vega.xyz/governance"
          />
          <NavigationItem
            text="Governance documentation"
            link="https://docs.vega.xyz/docs/mainnet/concepts/vega-protocol"
          />
        </NavigationList>
      </div>
    </div>
  );
};

export default Governance;
