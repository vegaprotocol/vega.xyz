import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery, Link } from "gatsby";
import Seo from "../../components/Seo";

const PapersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { collection: { eq: "papers" } }) {
        edges {
          node {
            collection
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(data.allMarkdownRemark.edges);
  return (
    <Layout>
      <Seo title="Papers" />
      <Container>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <Link to={`${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </Layout>
  );
};

export default PapersPage;
