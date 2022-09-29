import React from "react";
import { useNetworkParams } from "../hooks/use-network-params";
import { SnakeToCamel } from "../utils/tools";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ParameterBox from "./ParameterBox";

export interface NetworkParameterProps {
  param: string;
  prefix?: string;
  suffix?: string;
}

const NetworkParameter = ({ param, prefix, suffix }: NetworkParameterProps) => {
  const { params, loading, error } = useNetworkParams();
  const { t, i18n } = useTranslation("component.network-parameter");

  return (
    <>
      {loading && (
        <div>
          <Trans t={t}>Loading...</Trans>
        </div>
      )}
      {error && (
        <div>
          <Trans t={t}>Error loading value</Trans>
        </div>
      )}
      {params && (
        <ParameterBox
          value={params[param]}
          prefix={prefix}
          suffix={suffix}
          description={`This value is determined by the network parameter ${SnakeToCamel(
            param
          )}`}
        />
      )}
    </>
  );
};

export default NetworkParameter;
