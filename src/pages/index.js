import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Seo from "../components/Seo";
import Ticker from "../components/Ticker";
import GlitchTitle from "../components/GlitchTitle";
import BlogPosts from "../components/BlogPosts";
import LeadingLine from "../components/LeadingLine";
import ButtonLink from "../components/ButtonLink";
import LinkCta from "../components/LinkCta";
import PageSection from "../components/PageSection";
import Calendar from "../components/Calendar";
import RoadMap from "../components/RoadMap";
import RoadMapMobile from "../components/RoadMapMobile";
import Rip from "../components/Svg/Home/Rip/Responsive";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import UniverseLeft from "../components/Svg/Home/UniverseLeft/Responsive";
import UniverseRight from "../components/Svg/Home/UniverseRight/Responsive";
import UniverseBottom from "../components/Svg/Home/UniverseBottom/Responsive";
import UniverseBottom2 from "../components/Svg/Home/UniverseBottom2";
import UniverseTop from "../components/Svg/Home/UniverseTop";
import PermissionlessMarketCreationIcon from "../images/feature-icons/permissionless-market-creation.svg";
import AntiFrontRunningProtectionIcon from "../images/feature-icons/anti-front-running-protection.svg";
import PurposeBuiltBlockChainIcon from "../images/feature-icons/purpose-built.svg";
import PseudononymousTradingIcon from "../images/feature-icons/pseudononymous-trading.svg";
import HighCapitalEfficiencyIcon from "../images/feature-icons/high-capital-efficiency.svg";
import NoGasFeesIcon from "../images/feature-icons/no-gas-fees.svg";
import NativeLiquidityProvision from "../images/feature-icons/native-liquidity-provision.svg";
import CrossChainSupportIcon from "../images/feature-icons/cross-chain-support.svg";

const ToolBox = ({ title, description, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="hover:-translate-y-2 border border-vega-border-muted rounded-3xl p-4 md:p-5 lg:pb-8 flex lg:block gap-4"
    >
      <div className="w-[4.75rem] lg:w-[5.9375rem] shrink-0">
        <GatsbyImage image={icon} alt={title} className="lg:mb-6 lg:w-auto " />
      </div>
      <div>
        <div className="title-s mb-1 md:mb-3">{title}</div>
        <p className="text-vega-text-muted copy-xxs !mb-0">{description}</p>
      </div>
    </a>
  );
};

const FeatureBox = ({ title, description, icon }) => {
  return (
    <div>
      <img src={icon} alt="" className="w-[30px] h-[30px] mb-4" />
      <div>
        <div className="!mb-3 text-[1.3125rem] xl:text-[1.5rem] leading-[1.15]">
          {title}
        </div>
        <p className="text-vega-grey text-base mb-0">{description}</p>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { t } = useTranslation("page.index");
  return (
    <Layout>
      <Seo
        title={t("Blockchain derivatives")}
        description={t(
          "Discover Web3's native derivatives trading platform that is helping DeFi mature."
        )}
      />
      <main dataCy={"main"}>
        <div className="relative mt-6 md:mt-8">
          <div className="max-w-[18.75rem] mx-auto md:hidden">
            <UniverseTop />
          </div>
          <div className="absolute top-0 left-0 right-0">
            <div className="grid grid-cols-12 max-w-[100rem] mx-auto">
              <div className="col-span-3">
                <UniverseLeft />
              </div>
              <div className="col-span-6"></div>
              <div className="col-span-3 pt-[50%]">
                <UniverseRight />
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-12 max-w-[100rem] mx-auto">
            <div className="hidden md:block md:col-span-3"></div>
            <div className="md:col-span-6">
              <div className="mx-auto max-w-[25rem] md:max-w-[35rem] text-center pt-8 md:pt-20">
                <div>
                  <GlitchTitle
                    level="1"
                    className="title-l md:title-xxl xl:text-[7.1875rem] mb-2"
                    color="red"
                  >
                    <Trans t={t}>Toward a new era of finance</Trans>
                  </GlitchTitle>
                  <LeadingLine className="text-current lg:text-[1.75rem] !mb-0">
                    <Trans t={t}>
                      Decentralised infrastructure for the fair creation and
                      trading of derivatives.
                    </Trans>
                  </LeadingLine>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:col-span-3"></div>
          </div>
        </div>
        <div className="md:hidden flex justify-end mt-10">
          <div className="w-full max-w-[27rem]">
            <UniverseBottom2 />
          </div>
        </div>
        <Container>
          <div className="relative max-w-[29rem] lg:max-w-[50rem] mx-auto mb-10 -mt-[15%] md:mt-0">
            <div className="grid lg:grid-cols-3 gap-4 md:gap-8 py-12">
              <ToolBox
                title="Console"
                description="Try out trading on the fully decentralised Vega network (Testnet)."
                icon={getImage(data.consoleIcon)}
                link="https://console.fairground.wtf/"
              />
              <ToolBox
                title="Governance"
                description="Submit and vote on proposals to create and change markets, network parameters and assets."
                icon={getImage(data.governanceIcon)}
                link="https://token.vega.xyz/governance"
              />
              <ToolBox
                title="Block Explorer"
                description="Explore real-time Vega blockchain information."
                icon={getImage(data.blockExplorerIcon)}
                link="https://explorer.vega.xyz/"
              />
            </div>

            <div className="text-center">
              <LinkCta to="/use">Browse the dapps and tools</LinkCta>
            </div>
          </div>
        </Container>
        <div className="hidden md:block max-w-[38rem] xl:max-w-[45rem] mx-auto mb-20">
          <UniverseBottom />
        </div>
        <div className=" py-8 lg:py-16">
          <GlitchTitle
            level="2"
            color="orange"
            className="title-l md:title-xl xl:text-[5.875rem] text-center"
          >
            Key features
          </GlitchTitle>

          <Container>
            <div className="py-8 lg:pt-16">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12 lg:grid-cols-4 mb-12">
                <FeatureBox
                  title={t("Permissionless market creation")}
                  description={t("Propose a market on any underlying.")}
                  icon={PermissionlessMarketCreationIcon}
                />
                <FeatureBox
                  title={t("Anti front running protection")}
                  description={t("Fair access to the order book.")}
                  icon={AntiFrontRunningProtectionIcon}
                />
                <FeatureBox
                  title={t("Purpose-built blockchain")}
                  description={t(
                    "High performing smart contracts for sophisticated trading."
                  )}
                  icon={PurposeBuiltBlockChainIcon}
                />
                <FeatureBox
                  title={t("Pseudonymous trading")}
                  description={t(
                    "Keep control of your data, and protect your privacy."
                  )}
                  icon={PseudononymousTradingIcon}
                />
                <FeatureBox
                  title={t("High capital efficiency")}
                  description={t(
                    "Lower capital costs and evaluate risk live with cross margining."
                  )}
                  icon={HighCapitalEfficiencyIcon}
                />
                <FeatureBox
                  title={t("No gas fees on trading")}
                  description={t(
                    "Fees only on trades on a market in continuous trading."
                  )}
                  icon={NoGasFeesIcon}
                />
                <FeatureBox
                  title={t("Native liquidity provision")}
                  description={t(
                    "Built-in liquidity incentives for bustling markets."
                  )}
                  icon={NativeLiquidityProvision}
                />
                <FeatureBox
                  title={t("Cross-chain support")}
                  description={t(
                    "Choose the digital asset for collateral or settlements."
                  )}
                  icon={CrossChainSupportIcon}
                />
              </div>
              <div className="text-center">
                <ButtonLink
                  link="/key-concepts"
                  text={t("View all")}
                  className="bg-vega-mid-grey"
                />
              </div>
            </div>
          </Container>
        </div>
        <Rip />
        <div className="pt-16">
          <Ticker />
        </div>
        <Container hideXOverflow={true}>
          <div className="pt-16 md:pt-32 lg:pt-40 md:pb-10">
            <div id="roadmap">
              <RoadMapMobile data={data.roadmap} className="md:hidden" />
              <RoadMap data={data.roadmap} className="hidden md:block" />
            </div>
          </div>

          <PageSection>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="title-l mb-8 hyphens-auto">
                  <Trans t={t}>Events</Trans>
                </div>
              </div>

              <div className="lg:col-span-8">
                <Calendar />
              </div>
            </div>
          </PageSection>

          <PageSection>
            <BlogPosts />
          </PageSection>
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    roadmap: allMarkdownRemark(
      filter: {
        collection: { eq: "roadmap" }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [fields___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            step_title
            title
          }
          fields {
            locale
            order
            slug
          }
          html
        }
      }
    }
    consoleIcon: file(relativePath: { eq: "tool-icons/console-alt.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    governanceIcon: file(relativePath: { eq: "tool-icons/governance.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    blockExplorerIcon: file(
      relativePath: { eq: "tool-icons/block-explorer.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
