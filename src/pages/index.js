import * as React from "react";
import Layout from "../components/Layout";
import Container from "../components/Container";
//import ScrambleText from "../components/ScrambleText";
import { useIntl } from "gatsby-plugin-react-intl";
import Seo from "../components/Seo";
import GlitchTitle from "../components/GlitchTitle";
import LeadingLine from "../components/LeadingLine";
import ButtonLink from "../components/ButtonLink";
import PageSection from "../components/PageSection";
import Planet from "../components/Svg/Planet";

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
          <PageSection>
            <div className="grid grid-cols-12">
              <div className="col-span-8">
                <div className="title-l mb-4">
                  We're throwing open the doors to the new financial system
                  &mdash; and a truly democratic society.
                </div>
                <div className="copy-s !mb-8">
                  Don’t ask for permission. Ask how you can play a part in this
                  new world of DeFi. Decentralised derivatives markets are here
                  to stay.
                </div>
                <div>
                  <div className="inline-block mb-4 mr-4">
                    <ButtonLink text="Learn more" link="/key-concepts" />
                  </div>
                  <ButtonLink text="Join the community" link="/community" />
                </div>
              </div>
              <div className="col-span-4"></div>
            </div>
          </PageSection>
          {/* <div className="max-w-2xl">
            <h1 className="font-glitched mb-4 text-5xl uppercase">
              <ScrambleText
                text={intl.formatMessage({ id: "page-index-hero-title" })}
              ></ScrambleText>
            </h1>
            <p className="mb-6">
              {intl.formatMessage({ id: "page-index-hero-paragraph" })}
            </p>
            <p>
              <Link to="/" className="underline">
                {intl.formatMessage({ id: "learn-more" })} &raquo;
              </Link>
            </p>
          </div> */}
        </Container>
      </main>
    </Layout>
  );
};

export default IndexPage;
