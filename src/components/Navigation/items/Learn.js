import React from "react";
import NavigationItem from "../Item";
import NavigationList from "../List";
import NavigationHeading from "../Heading";

const Learn = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <NavigationHeading>Explore</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Key concepts" link="/key-concepts" />
          <NavigationItem text="Vega papers" link="/papers" />
          <NavigationItem
            text="Whitepaper"
            link="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
          />
          <NavigationItem
            text="Technical overview"
            link="https://vega.xyz/papers/vega-technical-overview.pdf"
          />
          <NavigationItem text="Talks" link="/talks" />
        </NavigationList>
      </div>
      <div>
        <NavigationHeading>Latest</NavigationHeading>
        <NavigationList>
          <NavigationItem text="Blog" link="https://blog.vega.xyz" />
        </NavigationList>
      </div>
    </div>
  );
};

export default Learn;
