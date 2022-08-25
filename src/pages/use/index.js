import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import BoxTitle from "../../components/BoxTitle";
import Fairground from "../../components/Fairground";
import ToolBox from "../../components/ToolBox";
import AddGraphic from "../../components/Svg/Use/Add/Add";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const UsePage = ({ data }) => {
  const { t } = useTranslation("page.use");
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
        title={t("Use the network")}
        description={t(
          "Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy."
        )}
      />
      <Container dataCy={"main"}>
        <div className="text-center mb-8 md:mb-12 pt-6 md:pt-16">
          <div className="max-w-[61rem] mx-auto text-center">
            <h1>
              <BoxTitle text={t("Use Vega")} />
            </h1>
            <GlitchTitle
              level="2"
              color="red"
              className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4 text-center"
            >
              <Trans t={t}>Tools built on Vega</Trans>
            </GlitchTitle>
          </div>
        </div>

        <div className="max-w-[90rem] md:px-6 lg:px-8 mx-auto">
          <div className="text-center mx-auto border-b overflow-x-scroll whitespace-nowrap md:whitespace-normal overflow-y-hidden border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6">
            <button
              tabIndex={0}
              onClick={() => changeFilter(null)}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === null
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>All</Trans>
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
              <Trans t={t}>Wallets</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter("dapp")}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === "dapp"
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>dApps</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter("tool")}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === "tool"
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>Tools</Trans>
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 py-16 md:mb-12"
          ref={tabs}
        >
          {data.allTools.nodes.map((tool, idx) => (
            <div
              className={`${tool.category.toLowerCase()} max-w-[26rem] w-full mx-auto md:max-w-none`}
              key={idx}
            >
              <ToolBox
                icon={tool.icon.childImageSharp.gatsbyImageData}
                title={t(tool.title, { ns: "content.tools" })}
                link={tool.link}
                author={tool.author}
                text={t(tool.description, { ns: "content.tools" })}
                category={t(tool.category, { ns: "content.tools" })}
              />
            </div>
          ))}
        </div>

        <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
          <div>
            <p className="title-m mb-3">
              <Trans t={t}>Want to add something to this list?</Trans>
            </p>
            <p className="prose copy-s text-vega-mid-grey">
              <Trans t={t} i18nKey="Chat to us on Discord and start building">
                <a
                  href="https://vega.xyz/discord/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to us on Discord
                </a>{" "}
                and <Link to="/develop">start building</Link>.
              </Trans>
            </p>
          </div>
          <AddGraphic className="max-w-[16rem] w-full self-end" />
        </div>
      </Container>

      <div className="mt-16">
        <Fairground />
      </div>
    </Layout>
  );
};

export default UsePage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allTools {
      nodes {
        title
        description
        author
        link
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
