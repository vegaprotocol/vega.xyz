import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import Wormhole from "../../components/Svg/Wormhole";
import Incentives from "../../components/Incentives";
import PageSection from "../../components/PageSection";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import BoxLink from "../../components/BoxLink";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import StarCrossed from "../../components/Svg/StarCrossed";
import BlogPosts from "../../components/BlogPosts";
import Moshed from "../../video/moshed.mp4";
import LadderIllustration from "../../components/Svg/LadderIllustration";
import { StaticImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const DevelopPage = ({ data }) => {
  const { i18n, t } = useTranslation("page.develop");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });
  return (
    <Layout>
      <Seo
        title={t("Develop with Vega")}
        description={t(
          "Get access to the Vega APIs, contribute to the source code, earn bounties and be rewarded for building the future of DeFi."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={"main"}>
        <div className="pt-6 mb-16 lg:pt-16">
          <div className="md:grid md:grid-cols-12">
            <div className="relative z-10 col-span-8 col-start-1 row-span-full lg:pb-[8vw]">
              <h1>
                <BoxTitle text={t("Develop")} />
              </h1>
              <div className="title-m max-w-[38.75rem] md:title-l lg:title-xxl mb-4 mt-4">
                <Trans t={t}>Develop on Vega</Trans>
              </div>
              <LeadingLine className="text-current max-w-[30rem]">
                <Trans t={t}>
                  Contribute to our open source repositories on GitHub or create
                  software using Vega — and earn rewards.
                </Trans>
              </LeadingLine>
              <div className="hidden md:block mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[20rem] md:max-w-[35rem] mx-auto md:mx-0">
                  <div>
                    <ButtonLink
                      text={t("Explore the docs")}
                      link="https://docs.vega.xyz/docs/concepts/new-to-vega/"
                      className="w-full text-center"
                    />
                  </div>
                  <div>
                    <ButtonLink
                      text={t("Get the code")}
                      link="https://github.com/vegaprotocol"
                      className="w-full text-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
              <div className="md:translate-x-20 md:scale-125 md:translate-y-12 lg:translate-x-1/4 lg:scale-150">
                <Wormhole />
              </div>
            </div>
          </div>
          <div className="mt-6 md:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[20rem] md:max-w-[35rem] mx-auto md:mx-0">
              <div>
                <ButtonLink
                  text={t("Explore the docs")}
                  link="https://docs.vega.xyz/docs/concepts/new-to-vega/"
                  className="w-full text-center"
                />
              </div>
              <div>
                <ButtonLink
                  text={t("Get the code")}
                  link="https://github.com/vegaprotocol"
                  className="w-full text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Incentives />
      </Container>

      <Container>
        <PageSection>
          <StarCrossed />

          <h2 className="title-m max-w-[43.75rem] md:title-l mt-6 mx-auto text-center">
            <Trans t={t}>
              Build decentralised apps, bots and trading clients with our APIs
            </Trans>
          </h2>

          <div className="grid gap-x-5 gap-y-14 grid-cols-1 mb-12 mt-12 md:grid-cols-2 xl:grid-cols-2">
            <BoxLink
              title={t("REST")}
              text={t(
                "The ubiquitous protocol for the web, Vega has a set of REST APIs that map directly onto equivalent gRPC API service methods."
              )}
              linkTitle={t("Get Started")}
              link="https://docs.vega.xyz/docs/mainnet/api/rest/overview/"
            />

            <BoxLink
              title={t("gRPC")}
              text={t(
                "For fast and efficient communication with Vega's APIs, gRPC supports near real time streaming of updates from Vega and is the transport of choice for many web3 apps."
              )}
              linkTitle={t("Get Started")}
              link="https://docs.vega.xyz/docs/mainnet/grpc/vega/vega.proto"
            />

            <BoxLink
              title={t("GraphQL")}
              text={t(
                "Like gRPC, GraphQL supports near real time streaming of updates from Vega. It uses websockets under the hood but follows the specification for streaming as set by GraphQL."
              )}
              linkTitle={t("Get Started")}
              link="https://docs.vega.xyz/docs/mainnet/graphql"
            />

            <BoxLink
              title={t("Wallet")}
              text={t(
                "Allows programmatic access to signing and key management and is used to sign transactions with a private and public key pair when submitting orders or other commands to a Vega Node."
              )}
              linkTitle={t("Get Started")}
              link="https://docs.vega.xyz/docs/tools/vega-wallet/"
            />
          </div>
        </PageSection>
      </Container>

      <PageSection>
        <div className="relative pt-16 px-16 text-center md:pt-32">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute left-0 top-0 w-full h-full object-cover"
          >
            <source src={Moshed} type="video/mp4" />
          </video>

          <div className="relative">
            <h2 className="title-l max-w-[45rem] md:title-xl lg:title-xxl mb-4 mx-auto">
              <Trans t={t}>Join the Builders Club</Trans>
            </h2>
            <p className="copy-xs md:copy-s text-white max-w-[45rem] mx-auto">
              <Trans t={t}>
                For developers, coders, hackers, dreamers who want to create
                software on top of Vega.
              </Trans>
            </p>
            <ButtonLink
              text={t("Meet on Discord")}
              link="https://vega.xyz/discord/"
              color="light"
            />
            <div className="mt-16">
              <LadderIllustration />
            </div>
          </div>
        </div>
      </PageSection>

      <Container>
        <PageSection>
          <div className="mb-24">
            <div className="flex items-end justify-between mb-8">
              <h2 className="title-m max-w-[15rem] md:title-l md:max-w-[26rem]">
                <Trans t={t}>Featured tutorials</Trans>
              </h2>
              <div className="hidden md:block">
                <ButtonLink
                  link="https://docs.vega.xyz/"
                  text={t("Explore the docs")}
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="aspect-w-16 aspect-h-9">
                <a
                  href="https://www.youtube.com/watch?v=hpsHUCU5MwY"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../../images/vega-wallet-video-poster.jpg"
                    alt="Vega Wallet Mac OS"
                    placeholder="none"
                    layout="constrained"
                    width={1200}
                    height={679}
                  />
                </a>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <a
                  href="https://www.youtube.com/watch?v=rzOxpWrnv64"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../../images/vega-deposits-withdrawals-poster.jpg"
                    alt="Deconstructing Vega - Deposits & Withdrawals"
                    placeholder="none"
                    layout="constrained"
                    width={1200}
                    height={679}
                  />
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <ButtonLink
                link="https://docs.vega.xyz/"
                text={t("Explore the docs")}
              />
            </div>
          </div>

          <BlogPosts />
        </PageSection>

        <PageSection>
          <div className="text-center">
            <GlitchTitle
              color="red"
              level="2"
              className="mb-4 title-m md:title-l lg:title-xxl"
            >
              <Trans t={t}>Where next?</Trans>
            </GlitchTitle>
          </div>

          <div className="max-w-[12rem] md:max-w-[52.5rem] grid gap-6 mt-12 mx-auto md:grid-cols-3">
            <BoxLinkSimple
              text={t("Say hello on Discord")}
              link="https://vega.xyz/discord/"
            />
            <BoxLinkSimple
              text={t("Explore the forum")}
              link="https://community.vega.xyz/"
            />
            <BoxLinkSimple text={t("See the Roadmap")} link="/#roadmap" />
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default DevelopPage;

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
