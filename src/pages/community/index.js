import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { useIntl } from "gatsby-plugin-react-intl";
import JumpNavigation from "../../components/Navigation/JumpNavigation";
import { CommunityPageSections } from "../../data/CommunityPageSections";
import ButtonLink from "../../components/ButtonLink";
import BoxLink from "../../components/BoxLink";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import BoxLinkHero from "../../components/BoxLinkHero";
import LeadingLine from "../../components/LeadingLine";
import PageSection from "../../components/PageSection";
import TwitchEmbed from "../../components/TwitchEmbed";
import Incentive from "../../components/Incentive";
import GlitchTitle from "../../components/GlitchTitle";
import DeadFish from "../../images/dead-fish.svg";
import { getImage } from "gatsby-plugin-image";
import GhostParty from "../../components/GhostParty";

const CommunityPage = ({ data }) => {
  const intl = useIntl();
  const ambassadorImage = getImage(data.ambassadorImage);
  const builderImage = getImage(data.builderImage);

  return (
    <Layout>
      <div className="relative z-20">
        <JumpNavigation
          pageTitle={intl.formatMessage({ id: "page-community-title" })}
          sections={CommunityPageSections}
        />
      </div>

      <Container>
        <div id="overview" className="pt-16">
          <h2 className="title-m max-w-[48rem] font-glitched md:title-l mb-6">
            {intl.formatMessage({ id: "page-community-hero-title" })}
          </h2>

          <div className="max-w-[48rem]">
            <LeadingLine
              text={intl.formatMessage({ id: "page-community-hero-text" })}
            />

            <div className="inline-block mb-4 mr-4">
              <ButtonLink
                text="Join us on Discord"
                link="https://vega.xyz/discord"
              ></ButtonLink>
            </div>
            <ButtonLink text="Try a tutorial" link="/tutorial"></ButtonLink>
          </div>
        </div>
      </Container>

      <GhostParty />

      <Container>
        <PageSection>
          <div id="contributions">
            <div className="text-center">
              <div className="max-w-[14.375rem] md:max-w-[23.4375rem] lg:max-w-[36.25rem] mx-auto">
                <GlitchTitle text="Contribute to Vega" color="red" />
              </div>
              <LeadingLine text="There are a number of ways to contribute..." />
            </div>
            <div className="grid gap-x-5 gap-y-14 grid-cols-1 mb-24 mt-12 md:grid-cols-2 xl:grid-cols-2">
              <BoxLink
                title="Play on Fairground"
                text="Help us find bugs and harden Vega's Testnet"
                linkTitle="Fairground"
                link="https://fairground.wtf"
                icon={DeadFish}
              />

              <BoxLink
                title="Develop on our apps"
                text="Contribute to source code and build things with our APIs"
                linkTitle="Learn more"
                link="/develop"
              />

              <BoxLink
                title="Documentation"
                text="Share feedback, make suggestions and translations."
                linkTitle="Learn more"
                link="https://fairground.wtf"
              />

              <BoxLink
                title="Play on Fairground"
                text="Help us find bugs and harden Vega's Testnet"
                linkTitle="Fairground"
                link="https://fairground.wtf"
              />
              <BoxLink
                title="Play on Fairground"
                text="Help us find bugs and harden Vega's Testnet"
                linkTitle="Fairground"
                link="https://fairground.wtf"
              />
            </div>
          </div>

          <div className="grey-box my-12 p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
            <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-8 uppercase">
              Incentives +<br /> Bounties
            </h3>
            <Incentive
              title="Integrate Vega with CCXT trading exchange API library"
              status="In progress"
              type="Develop"
              reward="2001 USDC"
              difficulty="5"
              link="https://www.google.com"
            />
            <Incentive
              title="Integrate Vega with CCXT trading exchange API library. Integrate Vega with CCXT trading exchange API library"
              status="In progress"
              type="Fairground"
              reward="2001 USDC"
              difficulty="5"
              link="https://www.google.com"
            />
            <Incentive
              title="Integrate Vega with CCXT trading exchange API library"
              status="In progress"
              type="Fairground"
              reward="2001 USDC"
              difficulty="5"
              link="https://www.google.com"
            />

            <ButtonLink text="Load more..." link="" />
          </div>

          <div className="grid gap-8 grid-cols-1 my-12 md:grid-cols-2">
            <BoxLinkHero
              title="Join the builders club"
              text="For developers, coders, hackers, dreamers who want to create software on top of Vega."
              linkTitle="Meet on Discord"
              link="https://fairground.wtf"
              image={ambassadorImage}
            />

            <BoxLinkHero
              title="Become an ambassador"
              text="We’re looking for Vega’s top-tier community members to work directly with the team to share what we’re building with those that need to hear about it."
              linkTitle="Learn more"
              link="https://fairground.wtf"
              image={builderImage}
            />
          </div>
        </PageSection>
        <PageSection>
          <div id="calendar">
            <GlitchTitle text="Upcoming Events + Meetups" color="purple" />
            <div className="text-[#4f4f4f] text-[2.125rem] my-16 p-12 text-center bg-vega-off-black">
              CALENDAR FUNCTIONALITY
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="relative">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <h2 className="title-m md:title-l lg:title-xxl">
                  Latest Live Stream
                </h2>
              </div>
              <div className="col-span-9">
                <TwitchEmbed iframeUrl="https://player.twitch.tv/?video=1228724466&parent=localhost&autoplay=false"></TwitchEmbed>
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div id="channels">
            <GlitchTitle text="Our Channels" color="red" />

            <div className="max-w-[50rem] grid gap-x-6 gap-y-6 grid-cols-2 mx-auto my-12 md:grid-cols-3 lg:gap-x-12">
              <BoxLinkSimple text="Discord" link="https://vega.xyz/discord" />
              <BoxLinkSimple
                text="Telegram"
                link="https://t.me/vegacommunity"
              />
              <BoxLinkSimple
                text="Twitter"
                link="https://twitter.com/vegaprotocol"
              />
              <BoxLinkSimple text="Forum" link="https://community.vega.xyz/" />
              <BoxLinkSimple
                text="YouTube"
                link="https://www.youtube.com/vegaprotocol"
              />
              <BoxLinkSimple
                text="Twitch"
                link="https://www.twitch.tv/vegaprotocol"
              />
            </div>
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default CommunityPage;

export const query = graphql`
  query {
    ambassadorImage: file(relativePath: { eq: "ghost-ambassador.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    builderImage: file(relativePath: { eq: "ghost-builder.png" }) {
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
