import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
//import ScrambleText from "../components/ScrambleText";
//import { useIntl } from "gatsby-plugin-react-intl";
import Seo from "../components/Seo";
import Ticker from "../components/Ticker";
import GlitchTitle from "../components/GlitchTitle";
import BlogPosts from "../components/BlogPosts";
import LeadingLine from "../components/LeadingLine";
import ButtonLink from "../components/ButtonLink";
import PageSection from "../components/PageSection";
import Calendar from "../components/Calendar";
import Planet from "../components/Svg/Planet";
import PlanetRocket from "../components/Svg/PlanetRocket";
import RoadMap from "../components/RoadMap";
import RoadMapBlob1 from "../components/Svg/RoadMapBlob1";
import RoadMapBlob2 from "../components/Svg/RoadMapBlob2";

const IndexPage = () => {
  // const intl = useIntl();
  return (
    <Layout>
      <Seo
        title="Blockchain derivatives"
        description="Discover Web3's native derivatives trading platform that is helping DeFi mature."
      />
      <main>
        <Container dataCy={"main"}>
          <div className="relative md:mt-12">
            <div className="mx-auto max-w-[50rem]">
              <Planet />
            </div>
            <div className="absolute inset-0 flex justify-center items-center text-center w-full">
              <div className="mx-auto max-w-[62.5rem]">
                <div>
                  <GlitchTitle
                    level="1"
                    size="large"
                    className="lg:!text-[5.875rem] mb-2"
                    color="red"
                  >
                    Toward a new era of finance
                  </GlitchTitle>
                  <LeadingLine className="text-current !mb-0">
                    We are Vega. Web3's native derivatives layer.
                  </LeadingLine>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-16 md:mt-24">
          <Ticker />
        </div>

        <Container hideXOverflow={true}>
          <PageSection>
            <div className="md:grid md:grid-cols-12 items-center">
              <div className="md:col-span-7 md:pr-12">
                <div className="max-w-[38.75rem] text-center md:text-left mx-auto">
                  <div className="title-m md:title-l mb-4">
                    Throw open the doors to the new financial system
                  </div>
                  <div className="copy-xs md:copy-s !mb-8">
                    And a truly democratic society. Don’t ask for permission.
                    Ask how you can play a part in this new world of DeFi.
                    Decentralised derivatives markets are here to stay.
                  </div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[20rem] md:max-w-none mx-auto">
                      <div>
                        <ButtonLink
                          text="Learn more"
                          link="/key-concepts"
                          className="w-full text-center"
                        />
                      </div>
                      <div>
                        <ButtonLink
                          text="Join the community"
                          link="/community"
                          className="w-full text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 mt-20 md:mt-0">
                <div className="max-w-[18.75rem] md:max-w-[25rem] mx-auto">
                  <PlanetRocket />
                </div>
              </div>
            </div>
          </PageSection>

          <PageSection>
            <div className="md:grid md:grid-cols-12">
              <div className="hidden md:block md:col-span-3 -translate-x-1/2">
                <RoadMapBlob1 className="relative top-[30%]" />
              </div>
              <div className="md:col-span-6">
                <RoadMap />
              </div>
              <div className="hidden md:block md:col-span-3 translate-x-1/2">
                <RoadMapBlob2 className="relative md:top-[45%] lg:top-[60%]" />
              </div>
            </div>
          </PageSection>

          <PageSection>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="title-l mb-8 hyphens-auto">Upcoming Events</div>
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
