import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { graphql, useStaticQuery } from "gatsby";
import BoxTitle from "../../components/BoxTitle";
import Planets from "../../components/Svg/Planets";
import Seo from "../../components/Seo";
import CareerItem from "../../components/CareerItem";
import LeadingLine from "../../components/LeadingLine";

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
        <div className="pt-6 lg:pt-16">
          <div className="grid grid-cols-12">
            <div className="relative z-10 col-span-12 col-start-1 row-span-full">
              <h1>
                <BoxTitle text="Careers" />
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

        {data.allMarkdownRemark.edges.length > 0 ? (
          <div className="grey-box mt-8 md:mt-20 p-8 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
            <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-6 uppercase">
              Open Jobs{" "}
              <span className="text-vega-mid-grey">
                ({data.allMarkdownRemark.edges.length})
              </span>
            </h3>
            <ol className="border-t border-current">
              {data.allMarkdownRemark.edges.map((edge, idx) => {
                return <CareerItem key={idx} career={edge.node} />;
              })}
            </ol>
          </div>
        ) : (
          <LeadingLine className="text-white">
            We don't currently have any open job roles.
          </LeadingLine>
        )}
      </Container>
    </Layout>
  );
};

export default CareersPage;
