import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery, Link } from "gatsby";

const JobsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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
  return (
    <Layout>
      <Container>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li>
                <Link to={`/job/${edge.node.fields.slug}`}>
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

export default JobsPage;
