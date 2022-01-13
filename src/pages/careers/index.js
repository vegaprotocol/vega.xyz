import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import ButtonLink from "../../components/ButtonLink";
import { graphql, useStaticQuery } from "gatsby";
import BoxTitle from "../../components/BoxTitle";
import Planets from "../../components/Svg/Planets";
import Seo from "../../components/Seo";
import styled from "styled-components";

const Markdown = styled.div`
  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
`;

const CareersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { collection: { eq: "jobs" } }) {
        edges {
          node {
            collection
            frontmatter {
              title
              description
              start_date
              location
              contract_type
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
      <Seo title="Careers" />
      <Container>
        <div className="mb-16 lg:pt-16">
          <div className="grid grid-cols-12">
            <div className="relative z-10 col-span-12 col-start-1 row-span-full">
              <h1>
                <BoxTitle text="Develop" />
              </h1>
              <div className="title-l md:title-xxl lg:title-xxxl xl:title-xxxl mb-6 mt-4 max-w-[18.75rem] md:max-w-[36rem] lg:max-w-[44rem]">
                Your career in Defi starts here
              </div>

              <div className="md:max-w-[60%] lg:max-w-[50%]">
                <div className="copy-s text-white">
                  Join the core team and work on the Vega project.
                </div>
                <p className="copy-xs">
                  Community at Vega starts with our global team. We're a
                  fast-growing, collaborative, and multi-disciplinary team,
                  learning from each other and setting our sights on solving
                  complex challenges. If you believe in the power of
                  decentralisation and want to change the world of finance, this
                  is your chance.
                </p>
              </div>
            </div>
            <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
              <div className="translate-x-4 md:translate-x-6 lg:translate-x-8">
                <Planets />
              </div>
            </div>
          </div>
        </div>

        <div className="grey-box my-12 p-8 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
          <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-8 uppercase">
            Open Jobs
          </h3>
          <ol className="border-t border-current">
            {data.allMarkdownRemark.edges.map((edge, idx) => {
              return (
                <li key={idx}>
                  <div className="py-3 border-b border-current">
                    <div className="pb-8">
                      <div className="copy-s !mb-1">
                        {edge.node.frontmatter.title}
                      </div>
                      <div className="grid grid-cols-12 gap-12">
                        <div className="col-span-6">
                          <Markdown className="text-vega-mid-grey mb-4">
                            {edge.node.frontmatter.description}
                          </Markdown>
                          <ButtonLink
                            text="View full spec"
                            link={`${edge.node.fields.slug}`}
                          />
                        </div>
                        <div className="col-span-2 text-[0.9375rem]">
                          <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                            Start Date:
                          </div>
                          {edge.node.frontmatter.start_date}
                        </div>
                        <div className="col-span-2 text-[0.9375rem]">
                          <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                            Location:
                          </div>
                          {edge.node.frontmatter.location}
                        </div>
                        <div className="col-span-2 text-[0.9375rem]">
                          <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                            Type:
                          </div>
                          {edge.node.frontmatter.contract_type}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </Layout>
  );
};

export default CareersPage;
