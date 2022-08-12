import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import Calendar from "../../components/Calendar";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Events = ({ data }) => {
  const { t } = useTranslation("page.community");
  return (
    <Layout>
      <Seo
        title="Incentives and bounties"
        description="Join the Vega community, where a fair finance future is being co-created - starting with derivatives."
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 mb-14">
          <BoxTitle text={t("Community")} />
          <h1 className="title-m font-glitched md:title-l mt-4">
            <Trans t={t}>Upcoming events + meetups</Trans>
          </h1>
        </div>
        <Calendar />
      </Container>
    </Layout>
  );
};

export default Events;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: {
          in: [
            "common"
            "component.navigation"
            "page.community.events"
            "component.calendar-event"
          ]
        }
        language: { eq: $language }
      }
    ) {
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
