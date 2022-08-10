import React, { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import { getImage } from "gatsby-plugin-image";
import ToolBox from "../../components/ToolBox";
import Incentives from "../../components/Incentives";

const IncentivesBounties = ({ data }) => {
  const ambassadorImage = getImage(data.ambassadorImage);
  const builderImage = getImage(data.builderImage);
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    async function fetchContributors() {
      let response = await fetch(
        "https://github-contributors-service.ops.vega.xyz/contributors?sort=random"
      );
      response = await response.json();
      setContributors(response.github_contributors);
    }
    fetchContributors();
  }, []);

  return (
    <Layout>
      <Seo
        title="Incentives and bounties"
        description="Join the Vega community, where a fair finance future is being co-created - starting with derivatives."
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 mb-14">
          <BoxTitle text="Community" />
          <h1 className="title-m font-glitched md:title-l mt-4">
            Incentives + Bounties
          </h1>
        </div>
        <Incentives />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-16">
          <ToolBox
            title="Ambassador program"
            text="Leading community members share what we're building with those that need to hear it — and get rewarded."
            link="/community/ambassadors/"
            icon={getImage(data.iconAmbassador)}
          />
          <ToolBox
            title="Builders Club"
            text="For developers, coders, hackers, dreamers who want to create software on top of Vega."
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
  query {
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
