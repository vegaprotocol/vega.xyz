import React from "react";
import Incentive from "./Incentive";
import ButtonLink from "./ButtonLink";

const Bounties = () => {
  return (
    <div className="grey-box my-12 p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
      <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-8 uppercase">
        Incentives +<br /> Bounties
      </h3>
      <Incentive
        title="Integrate Vega with CCXT trading exchange API library"
        status="In progress"
        type="Develop"
        reward="2001 USDC"
        difficulty="5"
        link="https://www.google.com"
      />
      <Incentive
        title="Integrate Vega with CCXT trading exchange API library. Integrate Vega with CCXT trading exchange API library"
        status="In progress"
        type="Fairground"
        reward="2001 USDC"
        difficulty="5"
        link="https://www.google.com"
      />
      <Incentive
        title="Integrate Vega with CCXT trading exchange API library"
        status="In progress"
        type="Fairground"
        reward="2001 USDC"
        difficulty="5"
        link="https://www.google.com"
      />

      <ButtonLink text="Load more..." link="" />
    </div>
  );
};

export default Bounties;
