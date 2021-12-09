import React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import { graphql } from "gatsby";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;

const Papers = (props) => {
  return (
    <Layout>
      <Container>
        <h1>This is a paper</h1>
      </Container>
    </Layout>
  );
};

export default Papers;
