import React from "react";
import NavigationItem from "../Item";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Use = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <ul>
      <NavigationItem text={t("Use the network")} link="/use" />
      <NavigationItem text={t("Get the Vega Wallet")} link="/wallet" />
      <NavigationItem
        text={t("Validate and secure the network")}
        link="/validators"
      />
      <NavigationItem
        text={t("Experiment on Fairground Testnet")}
        link="https://fairground.wtf"
      />
    </ul>
  );
};

export default Use;
