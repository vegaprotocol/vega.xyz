import React from "react";
import { useNetworkParams } from "../hooks/use-network-params";
import { SnakeToCamel } from "../utils/tools";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import ParameterBox from "./ParameterBox";

export interface NetworkParameterProps {
  param: string;
  prefix?: string;
  suffix?: string;
  formatForVega?: boolean;
}

const NetworkParameter = ({
  param,
  prefix,
  suffix,
  formatForVega = false,
}: NetworkParameterProps) => {
  const { params, loading, error } = useNetworkParams();
  const { t, i18n } = useTranslation("component.network-parameter");

  const formatVegaValue = (value) => {
    return (value / 1000000000000000000).toFixed(2);
  };

  return (
    <>
      {loading && (
        <span>
          <Trans t={t}>Loading...</Trans>
        </span>
      )}
      {error && (
        <span>
          <Trans t={t}>Error loading value</Trans>
        </span>
      )}
      {params && (
        <ParameterBox
          value={formatForVega ? formatVegaValue(params[param]) : params[param]}
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
