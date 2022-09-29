import React, { useState } from "react";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import BoxTitle from "../../components/BoxTitle";
import NetworkParameter from "../../components/NetworkParameter";
import ParameterBox from "../../components/ParameterBox";
import Table from "../../components/UI/Table";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import { useNetworkParams } from "../../hooks/use-network-params";

const Arrow = () => {
  return (
    <div className="max-w-[18.75rem]">
      <StaticImage
        src="../../images/page-validators-rewards-arrow.png"
        alt=""
      />
    </div>
  );
};

const StandByValidatorsLimit = () => {
  const { params } = useNetworkParams();

  return (
    <>
      {params && (
        <ParameterBox
          value={
            params.network_validators_ersatz_multipleOfTendermintValidators *
            params.network_validators_multisig_numberOfSigners
          }
          description={`This value is determined by the network parameter network.validators.ersatz.multipleOfTendermintValidators multiplied by network.validators.multisig.numberOfSigners`}
        />
      )}
    </>
  );
};

const ValidatorsPage = ({ data }) => {
  const { t, i18n } = useTranslation("page.validators");
  const [missingTranslations, setMissingTranslations] = useState(false);
  const { params } = useNetworkParams();

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  const tableData = {
    headings: ["Role", "Limit*", "Rewards", "Validator Score"],
    rows: [
      [
        "Candidate/Pending Validators",
        "Standby Validators",
        "Consensus Validators",
      ],
      [
        "Unlimited",
        <StandByValidatorsLimit />,
        <NetworkParameter param="network_validators_multisig_numberOfSigners" />,
      ],
      [
        "None",
        <NetworkParameter
          param="network_validators_ersatz_rewardFactor"
          prefix="x "
        />,
        <NetworkParameter
          param="network_validators_incumbentBonus"
          prefix="x "
        />,
      ],
      ["Lowest", <Arrow />, "Highest"],
    ],
  };

  return (
    <Layout>
      <Seo
        title={t("Validate and secure the network")}
        description={t(
          "Vega is a delegated proof of stake network with a finite number of validators, rewarded for securing the network. Consensus validators run a node validating the blocks containing the network's transactions and Vega token holders nominate validators through staking - delegating their VEGA to their chosen validator."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={"main"}>
        <div>
          <h1>
            <BoxTitle text={t("Use Vega")} />
          </h1>
          <h2 className="heading-l">
            <Trans t={t}>Validate and secure the network</Trans>
          </h2>
          <div className="body-xl">
            <Trans t={t}>
              Vega is a delegated proof of stake network with a finite number of
              validators, rewarded for securing the network. Consensus
              validators run a node validating the blocks containing the
              network's transactions and Vega token holders nominate validators
              through staking - delegating their VEGA to their chosen validator.
            </Trans>
          </div>
        </div>
        <div className="my-10">
          <h2 className="heading-s">
            <Trans t={t}>Validator rewards</Trans>
          </h2>
        </div>

        <div className="my-10">
          {params && (
            <Table headings={tableData.headings} rows={tableData.rows} />
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default ValidatorsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
