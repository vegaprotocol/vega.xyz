import React, { useState } from "react";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import BoxTitle from "../../components/BoxTitle";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const ValidatorsPage = ({ data }) => {
  const { t, i18n } = useTranslation("page.validators");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

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
        <div className="py-10">
          <h2 className="heading-s">Validator rewards</h2>
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
