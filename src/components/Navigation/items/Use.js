import React, { useState } from "react";
import NavigationItem from "../Item";

const Use = () => {
  return (
    <ul>
      <NavigationItem text="Use the network" link="/use" />
      <NavigationItem text="Get the Vega Wallet" link="/wallet" />
      <NavigationItem
        text="Experiment on Fairground Testnet"
        link="https://fairground.wtf"
      />
    </ul>
  );
};

export default Use;
