import React, { useEffect, useState } from "react";
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
import Calendar from "../../components/Calendar";
import LeadingLine from "../../components/LeadingLine";
import PageSection from "../../components/PageSection";
import TwitchEmbed from "../../components/TwitchEmbed";
import Incentives from "../../components/Incentives";
import GlitchTitle from "../../components/GlitchTitle";
import DeadFish from "../../images/dead-fish.svg";
import { getImage } from "gatsby-plugin-image";
import GhostParty from "../../components/GhostParty";
import Contributor from "../../components/Contributor";

const CommunityPage = ({ data }) => {
  const intl = useIntl();
  const ambassadorImage = getImage(data.ambassadorImage);
  const builderImage = getImage(data.builderImage);

  const [hostname, setHostname] = useState(null);
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    async function fetchContributors() {
      let response = await fetch(
        "https://contributors.vega.win/contributors?sort=random"
      );
      response = await response.json();
      setContributors(response.github_contributors);
    }
    fetchContributors();
  }, []);

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

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
            <LeadingLine>
              {intl.formatMessage({ id: "page-community-hero-text" })}
            </LeadingLine>

            <div className="inline-block mb-4 mr-4">
              <ButtonLink
                text="Join us on Discord"
                link="https://vega.xyz/discord"
              ></ButtonLink>
            </div>
            <ButtonLink
              text="Try a tutorial"
              link="https://www.youtube.com/playlist?list=PLtgXvHMJ2nYKco68-NzWWI0PnjZGAc9I2"
            ></ButtonLink>
          </div>
        </div>
      </Container>

      <div className="relative md:-top-6">
        <GhostParty />
      </div>

      <Container>
        <PageSection>
          <div id="contributions">
            <div className="text-center">
              <div className="max-w-[14.375rem] md:max-w-[23.4375rem] lg:max-w-[36.25rem] mx-auto">
                <GlitchTitle color="red" level="2" size="medium">
                  Contribute to Vega
                </GlitchTitle>
              </div>
              <LeadingLine>
                Get involved in the future of DeFi. And you could even get
                rewarded for it.
              </LeadingLine>
            </div>
            <div className="grid gap-x-12 gap-y-14 grid-cols-1 mb-24 mt-12 md:grid-cols-2 xl:grid-cols-2">
              <BoxLink
                title={`Play on Fairground`.toUpperCase()}
                text="Help us find bugs and harden Vega's Testnet."
                linkTitle="Fairground"
                link="https://fairground.wtf"
                icon={DeadFish}
              />

              <BoxLink
                title={`Develop on our APIs`.toUpperCase()}
                text="Contribute to the source code, and get building with our APIs."
                linkTitle="Learn more"
                link="/develop"
              />

              <BoxLink
                title={`Refine documentation`.toUpperCase()}
                text="Share feedback, make suggestions and help translate."
                linkTitle="Discord"
                link="https://docs.vega.xyz/"
              />

              <BoxLink
                title={`Write content`.toUpperCase()}
                text="Create articles, blog posts and contribute to research papers."
                linkTitle="Discord"
                link="https://vega.xyz/discord"
              />
              <BoxLink
                title={`Make art`.toUpperCase()}
                text="Create Vega inspired art using our brand assets and help visualise the DeFi and Web 3 revolution."
                linkTitle="Discord"
                link="https://vega.xyz/discord"
              />
            </div>
          </div>

          {contributors && (
            <PageSection>
              <div className="text-center">
                <div className="text-center mx-auto max-w-[30rem] mb-8">
                  <div className="title-l mb-3">Meet our contributors</div>
                  <LeadingLine>
                    Short sentence saying something about how Vega has some
                    great peeps involved
                  </LeadingLine>
                </div>
                <div className="relative flex mx-auto max-w-[49rem] flex-wrap justify-center gap-3 after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-b after:from-transparent after:to-white dark:after:to-black">
                  {contributors.slice(0, 26).map((contributor, idx) => {
                    return (
                      <div key={idx}>
                        <img
                          src={contributor.avatar_url}
                          width="75"
                          height="75"
                          className="rounded-full"
                          alt={contributor.login}
                        />
                      </div>
                    );
                  })}
                </div>
                <ButtonLink
                  link="/community/contributors"
                  text="See who's involved"
                  className="mt-12"
                />
              </div>
            </PageSection>
          )}

          <PageSection>
            <Incentives />
          </PageSection>

          <div className="grid gap-8 grid-cols-1 mt-16 md:grid-cols-2">
            <BoxLinkHero
              title="Join the builders club"
              text="For developers, coders, hackers, dreamers who want to create software on top of Vega."
              linkTitle="Meet on Discord"
              link="https://fairground.wtf"
              image={ambassadorImage}
            />

            <BoxLinkHero
              title="Become an ambassador"
              text="We're inviting Vega's leading community members to share what we're building with those that need to hear about it &mdash; and get rewarded for it."
              linkTitle="Learn more"
              link="https://fairground.wtf"
              image={builderImage}
            />
          </div>
        </PageSection>
        <PageSection>
          <div id="calendar">
            <div className="text-center max-w-[50rem] mx-auto">
              <GlitchTitle color="purple" level="2" size="medium">
                Upcoming Events + Meetups
              </GlitchTitle>
            </div>
            <div className="mt-16">
              <Calendar showEthDenver={false} />
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
                {hostname ? (
                  <TwitchEmbed
                    iframeUrl={`https://player.twitch.tv/?video=1262390878&autoplay=false&parent=${hostname}`}
                  ></TwitchEmbed>
                ) : null}
              </div>
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div id="channels">
            <div className="text-center">
              <GlitchTitle color="red" level="2" size="medium">
                Our Channels
              </GlitchTitle>
            </div>

            <div className="max-w-[50rem] grid gap-4 grid-cols-2 mt-12 mx-auto md:grid-cols-3">
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
        <PageSection>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h2 className="title-l md:title-xxxl lg:title-xxxxl">
                Want
                <br />
                Swag?
              </h2>
              <div className="my-6">Get your hands on it here</div>
              <ButtonLink
                link="https://www.google.com"
                text="Ask us on Discord"
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
