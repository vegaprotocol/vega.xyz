import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery, Link } from "gatsby";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import GlitchTitle from "../../components/GlitchTitle";
import UppercaseLink from "../../components/UppercaseLink";
import Paper from "../../components/Svg/Paper";

const PapersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { collection: { eq: "papers" } }
        sort: { fields: [frontmatter___position], order: ASC }
      ) {
        edges {
          node {
            collection
            frontmatter {
              title
              description
              position
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
      <Seo title="Papers" />
      <Container>
        <div className="lg:pt-16">
          <div className="mb-6 md:mb-16">
            <div className="mb-3">
              <BoxTitle text="Learn " />
            </div>
            <GlitchTitle text="Papers" level="1" />
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4"></div>
            <div className="col-span-12 md:col-span-8">
              <ol>
                {data.allMarkdownRemark.edges.map((edge, idx) => {
                  return (
                    <li
                      key={idx}
                      className="border-t border-current pt-4 pb-16 relative pr-36"
                    >
                      <div className="absolute top-4 right-0">
                        <Paper />
                      </div>
                      <div className="title-s mb-4">
                        {edge.node.frontmatter.title}
                      </div>
                      <Link to={`${edge.node.fields.slug}`}></Link>
                      <p className="copy-xs">
                        {edge.node.frontmatter.description}
                      </p>

                      {edge.node.frontmatter.links.map((link, idx) => {
                        return (
                          <div key={idx} className="mb-4">
                            <UppercaseLink text={link.title} link={link.link} />
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PapersPage;
