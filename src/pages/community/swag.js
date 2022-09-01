import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";

import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import BoxTitle from "../../components/BoxTitle";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Events = ({ data }) => {
  const { i18n, t } = useTranslation("page.community.swag");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  return (
    <Layout>
      <Seo
        title={t("Swag")}
        description={t("Find out how to get your hands on Vega swag")}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={"main"}>
        <div className="grid grid-cols-12 pt-16 mb-14">
          <div className="relative z-10 -mt-6 md:mt-0 col-span-12 md:col-span-5 self-center">
            <BoxTitle text="Community" />
            <h1 className="title-l mt-4 title-xxl lg:title-xxxl xl:title-xxxxl">
              <Trans t={t}>Want Swag?</Trans>
            </h1>
            <div className="mt-4 !mb-6 copy-s">
              <Trans t={t}>Get your hands on it here</Trans>
            </div>
            <ButtonLink
              link="https://vega.xyz/discord/"
              text="Ask us on Discord"
            />
          </div>
          <div className="pt-16 md:pt-0 col-span-12 md:col-span-7 text-center">
            <StaticImage
              src="../../images/vega-swag.png"
              alt="Vega Swag"
              placeholder="none"
              layout="constrained"
              width={520}
              height={584}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Events;

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
