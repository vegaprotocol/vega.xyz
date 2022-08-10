import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Seo from "../components/Seo";
import Ticker from "../components/Ticker";
import GlitchTitle from "../components/GlitchTitle";
import BlogPosts from "../components/BlogPosts";
import LeadingLine from "../components/LeadingLine";
import ButtonLink from "../components/ButtonLink";
import PageSection from "../components/PageSection";
import Calendar from "../components/Calendar";
import Planet from "../components/Svg/Planet";
import PlanetSmall from "../components/Svg/PlanetSmall";
import PlanetStars from "../components/Svg/PlanetStars";
import RoadMap from "../components/RoadMap";
import RoadMapMobile from "../components/RoadMapMobile";
import Rip from "../components/Svg/Rip";
import RipSmall from "../components/Svg/RipSmall";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation("page.index");
  return (
    <Layout>
      <Seo
        title={t("Blockchain derivatives")}
        description={t(
          "Discover Web3's native derivatives trading platform that is helping DeFi mature."
        )}
      />
      <main>
        <PlanetStars className="max-w-[7.5rem] mx-auto hidden md:block" />
        <div className="relative mt-6 md:mt-8">
          <div className="max-w-[62.5rem] pt-28 mx-auto hidden md:block">
            <Planet />
          </div>
          <div className="pt-[12rem] md:hidden mx-auto">
            <PlanetSmall />
          </div>
          <div className="absolute inset-0 flex justify-center text-center w-full">
            <Container dataCy={"main"}>
              <div className="mx-auto max-w-[25rem] md:max-w-[62.5rem]">
                <div>
                  <GlitchTitle
                    level="1"
                    className="title-l md:title-xl lg:text-[5.875rem] mb-2"
                    color="red"
                  >
                    <Trans t={t}>Toward a new era of finance</Trans>
                  </GlitchTitle>
                  <LeadingLine className="text-current !mb-0">
                    <Trans t={t}>
                      Decentralised infrastructure for the fair creation and
                      trading of derivatives.
                    </Trans>
                  </LeadingLine>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="relative -top-px">
          <Ticker />
        </div>
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
              <RoadMapMobile className="md:hidden" />
              <RoadMap className="hidden md:block" />
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
  }
`;
