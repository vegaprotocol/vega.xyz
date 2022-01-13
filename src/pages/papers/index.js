import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import GlitchTitle from "../../components/GlitchTitle";
import Paper from "../../components/Paper";

const PapersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { collection: { eq: "papers" } }
        sort: {
          fields: [frontmatter___category, frontmatter___position]
          order: ASC
        }
      ) {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
          edges {
            node {
              frontmatter {
                title
                description
                position
                category
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
    }
  `);
  const intl = useIntl();

  return (
    <Layout>
      <Seo title="Papers" />
      <Container>
        <div className="lg:pt-16">
          <div className="mb-6 md:mb-16">
            <div className="mb-3">
              <BoxTitle text="Learn " />
            </div>
            <GlitchTitle level="1">Papers</GlitchTitle>
          </div>

          {data.allMarkdownRemark.group.map((group, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-4">
                  <div className="title-m md:title-s xl:title-m md:pr-12 mb-12 md:mb-0 md:sticky md:top-6 md:pb-16">
                    {intl.formatMessage({ id: group.fieldValue })}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <ol>
                    {group.edges.map((edge, idx) => {
                      return <Paper paper={edge.node} key={idx} />;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default PapersPage;
