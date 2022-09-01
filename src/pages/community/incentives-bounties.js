import React from "react";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import { getImage } from "gatsby-plugin-image";
import ToolBox from "../../components/ToolBox";
import Incentives from "../../components/Incentives";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IncentivesBounties = ({ data }) => {
  const { t } = useTranslation("page.community.incentives-bounties");
  return (
    <Layout>
      <Seo
        title={t("Incentives and bounties")}
        description={t(
          "Join the Vega community, where a fair finance future is being co-created - starting with derivatives."
        )}
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 mb-14">
          <BoxTitle text={t("Community")} />
          <h1 className="title-m font-glitched md:title-l mt-4">
            <Trans t={t}>Incentives + bounties</Trans>
          </h1>
        </div>
        <Incentives />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-16">
          <ToolBox
            title={t("Ambassador program")}
            text={t(
              "Leading community members share what we're building with those that need to hear it — and get rewarded."
            )}
            link="/community/ambassadors/"
            icon={getImage(data.iconAmbassador)}
          />
          <ToolBox
            title={t("Builders Club")}
            text={t(
              "For developers, coders, hackers, dreamers who want to create software on top of Vega."
            )}
            link="https://vega.xyz/discord/"
            icon={getImage(data.iconBuildersClub)}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default IncentivesBounties;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: {
          in: [
            "common"
            "component.navigation"
            "page.incentives-bounties"
            "component.incentive"
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
    iconAmbassador: file(
      relativePath: { eq: "contribute-icons/ambassador.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconBuildersClub: file(
      relativePath: { eq: "contribute-icons/builders-club.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
