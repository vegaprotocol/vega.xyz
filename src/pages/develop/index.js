import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import Wormhole from "../../components/Svg/Wormhole";
import Incentives from "../../components/Incentives";
import CustomMarkets from "../../components/Svg/CustomMarkets";
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

const ButtonBlock = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[20rem] md:max-w-[35rem] mx-auto md:mx-0">
      <div>
        <ButtonLink
          text="Explore the docs"
          link="https://docs.vega.xyz/docs/concepts/new-to-vega/"
          className="w-full text-center"
        />
      </div>
      <div>
        <ButtonLink
          text="Get the code"
          link="https://github.com/vegaprotocol"
          className="w-full text-center"
        />
      </div>
    </div>
  );
};

const DevelopPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Develop with Vega"
        description="Get access to the Vega APIs, contribute to the source code, earn bounties and be rewarded for building the future of DeFi."
      />
      <Container hideXOverflow={true} dataCy={"main"}>
        <div className="pt-6 mb-16 lg:pt-16">
          <div className="md:grid md:grid-cols-12">
            <div className="relative z-10 col-span-8 col-start-1 row-span-full">
              <h1>
                <BoxTitle text="Develop" />
              </h1>
              <div className="title-m max-w-[38.75rem] md:title-l lg:title-xxl mb-4 mt-4">
                Creating the future of DeFi together
              </div>
              <LeadingLine className="text-current max-w-[30rem]">
                Contribute to our open source repositories on GitHub or create
                software using Vega &mdash; and earn rewards.
              </LeadingLine>
              <div className="hidden md:block mt-12">
                <ButtonBlock />
              </div>
            </div>
            <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
              <div className="md:translate-x-20 md:scale-125 md:translate-y-12 lg:translate-x-1/4 lg:scale-150">
                <Wormhole />
              </div>
            </div>
          </div>
          <div className="mt-6 md:hidden">
            <ButtonBlock />
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
            Build decentralised apps, bots and trading clients with our APIs
          </h2>

          <div className="grid gap-x-5 gap-y-14 grid-cols-1 mb-12 mt-12 md:grid-cols-2 xl:grid-cols-2">
            <BoxLink
              title="REST"
              text="The ubiquitous protocol for the web, Vega has a set of REST APIs that map directly onto equivalent gRPC API service methods."
              linkTitle="Get Started"
              link="https://docs.vega.xyz/docs/mainnet/api/rest/overview/"
            />

            <BoxLink
              title="gRPC"
              text="For fast and efficient communication with Vega's APIs, gRPC supports near real time streaming of updates from Vega and is the transport of choice for many web3 apps."
              linkTitle="Get Started"
              link="https://docs.vega.xyz/docs/mainnet/grpc/vega/vega.proto"
            />

            <BoxLink
              title="GraphQL"
              text="Like gRPC, GraphQL supports near real time streaming of updates from Vega. It uses websockets under the hood but follows the specification for streaming as set by GraphQL."
              linkTitle="Get Started"
              link="https://docs.vega.xyz/docs/mainnet/graphql"
            />

            <BoxLink
              title="Wallet"
              text="Allows programmatic access to signing and key management and is used to sign transactions with a private and public key pair when submitting orders or other commands to a Vega Node."
              linkTitle="Get Started"
              link="https://docs.vega.xyz/docs/tools/vega-wallet/"
            />
          </div>
        </PageSection>
      </Container>

      <Container>
        <PageSection>
          <div className="md:grid md:grid-cols-2 items-center">
            <div className="md:px-8">
              <div className="mb-12 md:mb-0 md:-translate-x-1/2 md:scale-[200%] lg:-translate-x-1/4 lg:scale-150">
                <CustomMarkets />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="title-l lg:title-xl mb-4">
                Create
                <br />
                Custom
                <br />
                Markets
              </h2>

              <div className="text-[0.9375rem] text-vega-mid-grey uppercase">
                Status:
              </div>
              <div className="copy-s">Coming soon to Mainnet</div>

              <div className="inline-block mb-4 mr-4">
                <ButtonLink
                  text="Try it out on Fairground"
                  link="https://fairground.wtf/"
                />
              </div>
              <ButtonLink
                text="Explore the Docs"
                link="https://docs.fairground.vega.xyz/docs/trading-questions/#governance"
              />
            </div>
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
              Join the Builders Club
            </h2>
            <p className="copy-xs md:copy-s text-white max-w-[45rem] mx-auto">
              For developers, coders, hackers, dreamers who want to create
              software on top of Vega.
            </p>
            <ButtonLink
              text="Meet on Discord"
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
                Featured tutorials
              </h2>
              <div className="hidden md:block">
                <ButtonLink
                  link="https://docs.vega.xyz/"
                  text="Explore the docs"
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
                text="Explore the docs"
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
              Where next?
            </GlitchTitle>
          </div>

          <div className="max-w-[12rem] md:max-w-[52.5rem] grid gap-6 mt-12 mx-auto md:grid-cols-3">
            <BoxLinkSimple
              text="Say hello on Discord"
              link="https://vega.xyz/discord/"
            />
            <BoxLinkSimple
              text="Explore the forum"
              link="https://community.vega.xyz/"
            />
            <BoxLinkSimple text="See the Roadmap" link="/#roadmap" />
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default DevelopPage;
