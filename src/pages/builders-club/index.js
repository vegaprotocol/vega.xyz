import React, { useState } from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BuildersClubLogo from "../../components/Svg/BuildersClub/Logo";
import HeroVegabond from "../../components/Svg/BuildersClub/HeroVegabond";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import LeadingLine from "../../components/LeadingLine";
import Button from "../../components/UI/Button";
import TranslationsBanner from "../../components/TranslationsBanner";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const BuildersClubPage = ({ data }) => {
  const { t, i18n } = useTranslation("page.builders-club");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  return (
    <Layout>
      <Seo
        title={t("Builders Club")}
        description={t(
          "Join the builders club VEGA+ Team to get support building on top of the Vega protocol and access to exclusive builder bounties."
        )}
      />
      {missingTranslations && <TranslationsBanner className="mb-0" />}
      <div className="bg-buildersClubHero bg-cover bg-top">
        <Container>
          <div className="pt-6 lg:pt-16">
            <div className="grid grid-cols-2 gap-x-12">
              <div className="mt-16">
                <div className="max-w-[43rem]">
                  <BuildersClubLogo className="mb-6" />
                  <LeadingLine className="text-white">
                    <Trans t={t}>
                      Join the builders club VEGA+ Team to get support building
                      on top of the Vega protocol and access to exclusive
                      builder bounties.
                    </Trans>
                  </LeadingLine>
                  <div>
                    <Button variant="hero" to="" colorMode="white">
                      <Trans t={t}>Apply now</Trans>
                    </Button>
                    <Button
                      variant="secondary"
                      to=""
                      colorMode="white"
                      className="ml-6"
                    >
                      <Trans t={t}>Meet us on Discord</Trans>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <HeroVegabond className="w-full h-auto max-w-[35rem]" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default BuildersClubPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
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
