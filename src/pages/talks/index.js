import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import Talk from "../../components/Talk";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const TalksPage = ({ data }) => {
  const { t } = useTranslation("page.talks");
  return (
    <Layout>
      <Seo
        title={t("Talks")}
        description={t(
          "Dive into talks and podcasts by the Vega team on crypto derivatives trading."
        )}
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16">
          <div className="mb-6 md:mb-16">
            <div className="mb-3">
              <BoxTitle text={t("Learn")} />
            </div>
            <GlitchTitle
              level="1"
              className="title-l md:title-xxl lg:title-xxxl mb-16"
            >
              <Trans t={t}>Talks</Trans>
            </GlitchTitle>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <div className="title-m md:title-s lg:title-m md:pr-12 mb-12 md:mb-0 md:sticky md:top-6 md:pb-16">
              <Trans t={t}>Recordings of past talks, events and podcasts</Trans>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div>
              <ul>
                {data.allMarkdownRemark.edges.map((talk, idx) => (
                  <Talk key={idx} talk={talk.node} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PageSection>
          <div className="mx-auto max-w-[26rem] md:max-w-[44rem] text-center">
            <div className="mb-12">
              <GlitchTitle
                level="2"
                className="title-m md:title-l lg:title-xxl"
              >
                <Trans t={t}>Have an idea for an event or talk?</Trans>
              </GlitchTitle>
            </div>
            <ButtonLink
              text={t("DM us on Twitter")}
              link="https://twitter.com/vegaprotocol"
            />
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default TalksPage;

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
    allMarkdownRemark(
      filter: {
        collection: { eq: "talks" }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "ll")
            location
            links {
              title
              link
            }
          }
          fields {
            slug
            locale
          }
        }
      }
    }
  }
`;
