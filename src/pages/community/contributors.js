import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import Contributor from "../../components/Contributor";
import BoxTitle from "../../components/BoxTitle";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Contributors = () => {
  const { t } = useTranslation("page.community");
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
        title="Contributors"
        description="Explore the people who have made Vega the exciting DeFi solution that it is."
      />
      <Container dataCy={"main"}>
        <div className="mb-14 pt-6 lg:pt-16">
          <div className="max-w-[21.25rem] md:max-w-[40rem] lg:max-w-[44rem] mx-auto text-center mb-6 md:mb-12">
            <BoxTitle text={t("Community")} />
            <GlitchTitle
              level={1}
              className="mt-4 title-m md:title-l lg:title-xxl"
            >
              <Trans t={t}>Meet our contributors</Trans>
            </GlitchTitle>
          </div>

          <div className="mx-auto max-w-[42rem]">
            {contributors ? (
              <div
                className="grid grid-cols-4 md:grid-cols-6 gap-6"
                data-cy="contributors"
              >
                {contributors.map((contributor, idx) => {
                  return (
                    <Contributor
                      className=""
                      key={idx}
                      contributor={contributor}
                    />
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Contributors;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: {
          in: [
            "common"
            "component.navigation"
            "component.contributor"
            "page.community.contributors"
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
