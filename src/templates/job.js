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

const Job = (props) => {
  return (
    <Layout>
      <Container>
        <h1 className="text-4xl uppercase">
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <p>{props.data.markdownRemark.frontmatter.description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </Container>
    </Layout>
  );
};

export default Job;
