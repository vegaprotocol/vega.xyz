import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
//import ScrambleText from "../components/ScrambleText";
import { useIntl } from "gatsby-plugin-react-intl";
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

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "page-index-title" })} />
      <main>
        <Container>
          <div className="relative">
            <div className="mx-auto max-w-[50rem]">
              <Planet />
            </div>
            <div className="absolute inset-0 flex justify-center items-center text-center w-full">
              <div className="mx-auto max-w-[62.5rem]">
                <div>
                  <GlitchTitle
                    level="1"
                    size="large"
                    className="lg:!text-[5.875rem]"
                    color="red"
                  >
                    Toward a new era of finance
                  </GlitchTitle>
                  <LeadingLine className="text-current">
                    We are Vega. Web3’s native derivatives layer.
                  </LeadingLine>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-24">
          <Ticker />
        </div>

        <Container>
          <PageSection>
            <div className="md:grid md:grid-cols-12 items-center">
              <div className="md:col-span-7 pr-12">
                <div className="max-w-[38.75rem]">
                  <div className="title-l mb-4">
                    We're throwing open the doors to the new financial system
                    &mdash; and a truly democratic society.
                  </div>
                  <div className="copy-s !mb-8">
                    Don’t ask for permission. Ask how you can play a part in
                    this new world of DeFi. Decentralised derivatives markets
                    are here to stay.
                  </div>
                  <div>
                    <div className="inline-block mb-4 mr-4">
                      <ButtonLink text="Learn more" link="/key-concepts" />
                    </div>
                    <ButtonLink text="Join the community" link="/community" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 mt-20 md:mt-0">
                <div className="max-w-[32rem] mx-auto">
                  <PlanetRocket />
                </div>
              </div>
            </div>
          </PageSection>

          <PageSection>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="title-l mb-8">Up-coming Events</div>
              </div>

              <div className="lg:col-span-9">
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
