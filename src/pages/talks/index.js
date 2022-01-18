import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/Seo";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import Talk from "../../components/Talk";

const PapersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { collection: { eq: "talks" } }
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
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Talks" />
      <Container>
        <div className="lg:pt-16">
          <div className="mb-6 md:mb-16">
            <div className="mb-3">
              <BoxTitle text="Learn " />
            </div>
            <GlitchTitle level="1" size="large">
              Talks
            </GlitchTitle>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <div className="title-m md:title-s lg:title-m md:pr-12 mb-12 md:mb-0 md:sticky md:top-6 md:pb-16">
              Recordings of past talks, events and podcasts
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
          <div className="mx-auto max-w-[44rem] text-center">
            <div className="mb-12">
              <GlitchTitle level="2" size="medium">
                Have an idea for an event or talk you'd like us to attend?
              </GlitchTitle>
            </div>
            <ButtonLink
              text="DM us on Twitter"
              link="https://twitter.com/vegaprotocol"
            />
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default PapersPage;
