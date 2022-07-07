import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ToolBox from "../../components/ToolBox";
import UseVegaResponsive from "../../components/Svg/Use/Hero/Responsive";

const UsePage = ({ data }) => {
  const tabs = useRef(null);
  const [filter, setFilter] = useState(null);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (filter) {
      for (let el of tabs.current.children) {
        el.classList.add("hidden");
      }

      tabs.current
        .querySelectorAll(`div.${filter}`)
        .forEach((el) => el.classList.remove("hidden"));
    } else {
      for (let el of tabs.current.children) {
        el.classList.remove("hidden");
      }
    }
  }, [filter, tabs]);

  return (
    <Layout>
      <Seo
        title="Use the network"
        description="Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy."
      />
      <Container dataCy={"main"}>
        <div className="md:grid md:grid-cols-2 md:gap-x-12 md:border-b-2 md:border-current pt-6 lg:pt-16">
          <div className="relative -bottom-[2px] self-end">
            <UseVegaResponsive />
          </div>
          <div className="py-10 md:py-12 self-center">
            <BoxTitle text="Tools built on Vega" />

            <GlitchTitle
              color="red"
              className="mt-4 md:mt-8 title-l lg:title-xl max-w-[80%]"
              level={1}
            >
              Vega-powered tools and services
            </GlitchTitle>
            <div className="prose copy-xs">
              <p className="mt-4">
                Trade on a fully decentralised network and propose new markets,
                provide liquidity, start staking or configure the network
                through governance.
              </p>
            </div>
          </div>
        </div>
        <PageSection>
          <div>
            <div className="text-center mb-8">
              <h2 className="title-m md:title-l">Tools built on Vega</h2>
            </div>
          </div>
        </PageSection>
      </Container>

      <div className="max-w-[90rem] md:px-6 lg:px-8 mx-auto">
        <div className="mx-auto border-b overflow-x-scroll whitespace-nowrap md:whitespace-normal overflow-y-hidden border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6">
          <button
            tabIndex={0}
            onClick={() => changeFilter(null)}
            className={`inline-block title-s px-3 py-5 border-b-2 ${
              filter === null
                ? "border-current"
                : "border-transparent hover:border-current"
            }`}
          >
            All
          </button>
          <button
            tabIndex={0}
            onClick={() => changeFilter("wallet")}
            className={`inline-block title-s px-3 py-5 border-b-2 ${
              filter === "wallet"
                ? "border-current"
                : "border-transparent over:border-current"
            }`}
          >
            Wallets
          </button>
          <button
            tabIndex={0}
            onClick={() => changeFilter("trading")}
            className={`inline-block title-s px-3 py-5 border-b-2 ${
              filter === "trading"
                ? "border-current"
                : "border-transparent hover:border-current"
            }`}
          >
            Trading
          </button>
          <button
            tabIndex={0}
            onClick={() => changeFilter("governance")}
            className={`inline-block title-s px-3 py-5 border-b-2 ${
              filter === "governance"
                ? "border-current"
                : "border-transparent hover:border-current"
            }`}
          >
            Governance
          </button>
        </div>
      </div>

      <Container>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-16"
          ref={tabs}
        >
          {data.allTools.nodes.map((tool, idx) => (
            <div className={tool.category.toLowerCase()} key={idx}>
              <ToolBox
                icon={tool.icon.childImageSharp.gatsbyImageData}
                title={tool.title}
                link={tool.link}
                text={tool.description}
                type={tool.type}
              />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default UsePage;

export const query = graphql`
  query ToolsQuery {
    allTools {
      nodes {
        title
        description
        link
        type
        category
        icon {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 96, height: 96)
          }
        }
      }
    }
  }
`;
