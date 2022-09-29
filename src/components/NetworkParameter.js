import React from "react";
import { useNetworkParams, NetworkParams } from "../hooks/use-network-params";

const NetworkParemeter = (props) => {
  const { params, loading, error } = useNetworkParams([
    NetworkParams.reward_asset,
    NetworkParams.reward_staking_delegation_payoutDelay,
  ]);

  return <>{params && <div>{params.reward_asset}</div>}</>;
};

export default NetworkParemeter;
