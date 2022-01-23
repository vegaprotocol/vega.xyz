import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import Blob1 from "../../components/Blob1";
import Incentives from "../../components/Incentives";
import PageSection from "../../components/PageSection";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import BoxLink from "../../components/BoxLink";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import StarCrossed from "../../components/StarCrossed";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogPosts from "../../components/BlogPosts";
import Moshed from "../../video/moshed.mp4";
import LadderIllustration from "../../components/Svg/LadderIllustration";

const ButtonBlock = () => {
  return (
    <div>
      <div className="inline-block mb-4 mr-4">
        <ButtonLink
          text="Explore the docs"
          link="https://docs.fairground.vega.xyz/"
        />
      </div>
      <ButtonLink text="Get the code" link="https://github.com/vegaprotocol" />
    </div>
  );
};

const DevelopPage = ({ data }) => {
  const placeholderImage = getImage(data.placeholderImage);

  return (
    <Layout>
      <Container>
        <div className="mb-16 lg:pt-16">
          <div className="md:grid md:grid-cols-12">
            <div className="relative z-10 col-span-8 col-start-1 row-span-full">
              <h1>
                <BoxTitle text="Develop" />
              </h1>
              <div className="title-m max-w-[38.75rem] md:title-l lg:title-xxl mb-6 mt-4">
                Creating the future of DeFi together
              </div>
              <LeadingLine className="text-white max-w-[30rem]">
                Add to the source code or create software using Vega &mdash; and
                earn rewards.
              </LeadingLine>
              <div className="hidden md:block mt-12">
                <ButtonBlock />
              </div>
            </div>
            <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
              <div className="translate-x-4 md:translate-x-6 lg:translate-x-8">
                <Blob1 />
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

          <div className="grid gap-x-5 gap-y-14 grid-cols-1 mb-24 mt-12 md:grid-cols-2 xl:grid-cols-2">
            <BoxLink
              title="REST"
              text="The ubiquitous protocol for the web, Vega has a set of REST APIs that map directly onto equivalent gRPC API service methods."
              linkTitle="Get Started"
              link="https://fairground.wtf"
            />

            <BoxLink
              title="gRPC"
              text="For fast and efficient communication with Vega's APIs, gRPC supports near real time streaming of updates from Vega and is the transport of choice for many web3 apps."
              linkTitle="Get Started"
              link="/develop"
            />

            <BoxLink
              title="GraphQL"
              text="Like gRPC, GraphQL supports near real time streaming of updates from Vega. It uses websockets under the hood but follows the specification for streaming as set by GraphQL."
              linkTitle="Get Started"
              link="https://docs.vega.xyz/"
            />

            <BoxLink
              title="Wallet"
              text="Allows programmatic access to signing and key management and is used to sign transactions with a private and public key pair when submitting orders or other commands to a Vega Node."
              linkTitle="Get Started"
              link="https://vega.xyz/discord"
            />
          </div>
        </PageSection>
      </Container>

      <Container>
        <PageSection>
          <div className="md:grid md:grid-cols-2">
            <div className="hidden px-8 md:block">
              <GatsbyImage image={placeholderImage} alt="Placeholder" />
            </div>

            <div>
              <h2 className="title-l lg:title-xl mb-4">
                Create
                <br />
                Custom
                <br />
                Markets
              </h2>

              <div className="pb-6 md:hidden">
                <GatsbyImage image={placeholderImage} alt="Placeholder" />
              </div>

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
                link="https://docs.vega.xyz/"
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
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7ZqIER8KF9E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/rzOxpWrnv64"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
            <GlitchTitle color="red" level="2" size="medium">
              Where next?
            </GlitchTitle>
          </div>

          <div className="max-w-[52.5rem] grid gap-6 mt-12 mx-auto md:grid-cols-3">
            <BoxLinkSimple
              text="Say hello on Discord"
              link="https://vega.xyz/discord/"
            />
            <BoxLinkSimple
              text="Explore the community"
              link="https://community.vega.xyz/"
            />
            <BoxLinkSimple text="See the Roadmap" link="/en/#roadmap" />
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default DevelopPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
