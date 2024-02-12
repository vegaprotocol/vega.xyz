/*
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Container from "../components/Container";
import ArrowLeft from "../components/Svg/ArrowLeft";
import { Link, graphql } from "gatsby";

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

const Jobs = (props) => {
  return (
    <Layout>
      <Seo
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
      />
      <Container>
        <div>
          <Link to="/careers" className="block uppercase text-[0.9375rem] mb-1">
            <ArrowLeft className="inline-block relative -top-[2px] mr-3" />
            All roles
          </Link>
          <div className="border-t border-current">
            <div className="md:grid md:grid-cols-12 pt-4">
              <div className="md:col-span-6 lg:col-span-5">
                <div className="md:sticky md:top-6 mb-3">
                  <h1 className="title-m lg:title-l mb-6 max-w-[25rem]">
                    {props.data.markdownRemark.frontmatter.title}
                  </h1>
                  <div className="text-vega-mid-grey uppercase text-[0.9375rem]">
                    Want to apply?
                  </div>
                  <div className="copy-s text-current">
                    Send your CV to{" "}
                    <a
                      href="mailto:jobs@vega.xyz"
                      className="text-vega-pink dark:text-vega-yellow"
                    >
                      jobs@vega.xyz
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 lg:col-span-7">
                <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: props.data.markdownRemark.html,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Jobs;
*/
