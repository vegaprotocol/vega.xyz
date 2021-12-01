import React from "react";
import Layout from "../../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

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
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.description}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default JobsPage;
