import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import BoxTitle from "../../components/BoxTitle";
import LeadingLine from "../../components/LeadingLine";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import AmbassadorLeaderboard from "../../components/AmbassadorLeaderboard";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const AmbassadorLeaderboardPage = () => {
  const { i18n, t } = useTranslation("page.community.ambassadors");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  return (
    <Layout>
      <Seo
        title={t("Ambassador Leaderboard")}
        description={t(
          "We celebrate our ambassadors and their work. Complete tasks to top the leaderboard, rise up the ranks, and see your name here!"
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16">
          <BoxTitle text={t("Community")} />
          <h1 className="title-m font-glitched md:title-l mb-4 md:mb-6 mt-4">
            <Trans t={t}>Ambassador Leaderboard</Trans>
          </h1>
          <LeadingLine className="!mb-14">
            <Trans t={t}>
              We celebrate our ambassadors and their work. Complete tasks to top
              the leaderboard, rise up the ranks, and see your name here!
            </Trans>
          </LeadingLine>
        </div>
        <AmbassadorLeaderboard />
      </Container>
    </Layout>
  );
};

export default AmbassadorLeaderboardPage;

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
