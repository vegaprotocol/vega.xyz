import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ToolBox from "../../components/ToolBox";
import AddGraphic from "../../components/Svg/Use/Add/Add";
import UseVegaResponsive from "../../components/Svg/Use/Hero/Responsive";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import FairgroundConsolIllustration from "../../images/fairground-console-illustration.svg";
import FairgroundBugIllustration from "../../images/fairground-bug-illustration.svg";
import Waltzer1 from "../../images/waltzer1.png";
import Waltzer2 from "../../images/waltzer2.png";

const UsePage = ({ data }) => {
  const { t } = useTranslation();
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
        {/* <div className="md:grid md:grid-cols-2 md:gap-x-12 md:border-b-2 md:border-current pt-6 lg:pt-16">
          <div className="relative -bottom-[2px] self-end">
            <UseVegaResponsive />
          </div>
          <div className="pt-10 md:py-12 self-center">
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
        </div> */}
        <div className="text-center mb-8 md:mb-12 pt-6 md:pt-16">
          <div className="max-w-[61rem] mx-auto text-center">
            <h1>
              <BoxTitle text="Use Vega" />
            </h1>
            <GlitchTitle
              level="2"
              color="red"
              className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4 text-center"
            >
              Tools built on Vega
            </GlitchTitle>
          </div>
        </div>
      </Container>

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
            {t("All", { ns: "tools" })}
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
            {t("WALLETS", { ns: "tools" })}
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
            {t("DAPPS", { ns: "tools" })}
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
            {t("Tools", { ns: "tools" })}
          </button>
        </div>
      </div>

      <Container>
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
                title={t(tool.title, { ns: "tools" })}
                link={tool.link}
                author={tool.author}
                text={t(tool.description, { ns: "tools" })}
                category={tool.category}
              />
            </div>
          ))}
        </div>

        <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
          <div>
            <p className="title-m mb-3">Want to add something to this list?</p>
            <p className="prose copy-s text-vega-mid-grey">
              <a href="https://vega.xyz/discord/" target="_blank">
                Chat to us on Discord
              </a>{" "}
              and <Link to="/develop">start building</Link>.
            </p>
          </div>
          <AddGraphic className="max-w-[16rem] w-full self-end" />
        </div>
      </Container>
      <PageSection>
        <div className="bg-fairground bg-center bg-cover bg-vega-yellow pt-6 pb-12 md:pb-40 dark:invert-0 invert text-black">
          <div className="animate-fairground-marquee bg-experiment-on-fairground bg-[length:1326px_62px] w-full h-[62px]"></div>

          <Container>
            <div className="md:grid md:grid-cols-12 mt-8 mb-8 md:mt-36 md:mb-20">
              <div className="md:col-span-2 relative">
                <div className="md:relative md:top-[10%]">
                  <img
                    src={Waltzer1}
                    className="max-w-[9rem] md:max-w-[13rem] w-full h-auto md:mx-auto inline-block"
                  />
                </div>
              </div>
              <div className="md:col-span-8 text-center">
                <div className="max-w-[40rem] mx-auto w-full">
                  <h2 className="title-m md:title-l lg:title-xl text-black mb-8">
                    Use Fairground, the Vega testnet, to play without
                    consquences.
                  </h2>
                  <a
                    className="bg-black text-white inline-block py-5 px-16 uppercase title-xxxs !font-not-glitched mx-auto"
                    href="https://fairground.wtf"
                    target="_blank"
                  >
                    Go to Fairground
                  </a>
                </div>
              </div>
              <div className="md:col-span-2 relative">
                <div className="w-full md:relative md:top-[50%] inline-block text-right">
                  <img
                    src={Waltzer2}
                    className="max-w-[9rem] md:max-w-[13rem] w-full h-auto md:mx-auto inline-block"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="border-b-2 border-current flex gap-x-6 justify-between items-end">
                <div className="copy-s !mb-2 lg:copy-m  order-2 md:order-1">
                  Use the powerful Vega Console app
                </div>
                <div className="w-full max-w-[30%] order-1 md:order-2">
                  <img
                    src={FairgroundConsolIllustration}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="border-b-2 border-current flex gap-x-6 justify-between items-end">
                <div className="copy-s !mb-2 lg:copy-m">
                  Earn rewards for finding bugs
                </div>
                <div className="w-full max-w-[20%] md:max-w-[30%]">
                  <img
                    src={FairgroundBugIllustration}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </PageSection>
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
