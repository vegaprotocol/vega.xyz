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
import Rip from "../components/Svg/Rip";
import RipSmall from "../components/Svg/RipSmall";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import UniverseLeft from "../components/Svg/Home/UniverseLeft/Responsive";
import UniverseRight from "../components/Svg/Home/UniverseRight/Responsive";
import UniverseBottom from "../components/Svg/Home/UniverseBottom/Responsive";
import UniverseBottom2 from "../components/Svg/Home/UniverseBottom2";
import UniverseTop from "../components/Svg/Home/UniverseTop";

const ToolBox = ({ title, description, icon }) => {
  console.log(icon);
  return (
    <div className="border border-vega-border-muted rounded-3xl p-4 lg:pb-8 flex lg:block gap-4">
      <div className="w-[4.75rem] lg:w-[5.9375rem] shrink-0">
        <GatsbyImage image={icon} alt={title} className="lg:mb-6 lg:w-auto " />
      </div>
      <div>
        <div class="title-s mb-3">{title}</div>
        <p className="text-vega-text-muted copy-xxs !mb-0">{description}</p>
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
          <div class="absolute top-0 left-0 right-0">
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
        <div className="relative max-w-[29rem] lg:max-w-[50rem] mx-auto mb-10 -mt-[15%] md:mt-0">
          <div class="grid lg:grid-cols-3 gap-4 md:gap-8 py-12">
            <ToolBox
              title="Console"
              description="Try out trading on the fully decentralised Vega network (Testnet)."
              icon={getImage(data.consoleIcon)}
            />
            <ToolBox
              title="Governance"
              description="Submit and vote on proposals to create and change markets, network parameters and assets."
              icon={getImage(data.governanceIcon)}
            />
            <ToolBox
              title="Block Explorer"
              description="Explore real-time Vega blockchain information."
              icon={getImage(data.blockExplorerIcon)}
            />
          </div>

          <div className="text-center">
            <LinkCta to="/use">Browse the dapps and tools</LinkCta>
          </div>
        </div>
        <div className="max-w-[38rem] xl:max-w-[45rem] mx-auto mb-20">
          <UniverseBottom />
        </div>
        <Ticker />
        <Container hideXOverflow={true}>
          <PageSection>
            <div className="max-w-[58.75rem] text-center mx-auto">
              <div className="title-m md:title-l mb-4">
                <Trans t={t}>
                  Throw open the doors to the new financial system
                </Trans>
              </div>
              <div className="copy-xs md:copy-s !mb-8">
                <Trans t={t}>
                  And a truly democratic society. Don't ask for permission. Ask
                  how you can play a part in this new world of DeFi.
                  Decentralised derivatives markets are here to stay.
                </Trans>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[18rem] md:max-w-[30rem] mx-auto">
                  <div>
                    <ButtonLink
                      text={t("Learn more")}
                      link="/key-concepts"
                      className="w-full text-center"
                      color="light"
                    />
                  </div>
                  <div>
                    <ButtonLink
                      text={t("Join the community")}
                      link="/community"
                      className="w-full text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageSection>
        </Container>
        <div className="pt-6">
          <RipSmall className="md:hidden" />
          <div className="max-w-[85%]">
            <Rip className="hidden md:block" />
          </div>
        </div>
        <Container hideXOverflow={true}>
          <div className="pt-10 md:pt-20 md:pb-10">
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
