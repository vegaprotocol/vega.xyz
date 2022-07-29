import React, { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import JumpNavigation from "../../components/Navigation/JumpNavigation";
import { CommunityPageSections } from "../../data/CommunityPageSections";
import ButtonLink from "../../components/ButtonLink";
import BoxTitle from "../../components/BoxTitle";
import Fairground from "../../components/Fairground";
import LeadingLine from "../../components/LeadingLine";
import Callout from "../../components/Callout";
import { getImage } from "gatsby-plugin-image";
import GhostParty from "../../components/Svg/GhostParty";
import ToolBox from "../../components/ToolBox";

const CommunityPage = ({ data }) => {
  const ambassadorImage = getImage(data.ambassadorImage);
  const builderImage = getImage(data.builderImage);
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    async function fetchContributors() {
      let response = await fetch(
        "https://github-contributors-service.ops.vega.xyz/contributors?sort=random"
      );
      response = await response.json();
      setContributors(response.github_contributors);
    }
    fetchContributors();
  }, []);

  return (
    <Layout>
      <Seo
        title="Community"
        description="Join the Vega community, where a fair finance future is being co-created - starting with derivatives."
      />
      <div className="relative z-20">
        <JumpNavigation
          pageSlug="community"
          pageTitle="Community"
          sections={CommunityPageSections}
        />
      </div>
      <Container dataCy={"main"}>
        <div id="overview" className="pt-6 lg:pt-16">
          <h1>
            <BoxTitle text="Community" />
          </h1>
          <h2 className="title-m max-w-[48rem] font-glitched md:title-l mb-4 md:mb-6 mt-4">
            From the governance to the build, Vega is community with fairness at
            its core.
          </h2>

          <div className="max-w-[48rem]">
            <LeadingLine className="!mb-6">
              This is just the beginning. Join us now and earn rewards for
              contributing to the future of finance.
            </LeadingLine>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[20rem] md:max-w-[32rem]">
              <div>
                <ButtonLink
                  text="Join us on Discord"
                  link="https://vega.xyz/discord"
                  className="w-full text-center"
                ></ButtonLink>
              </div>
              <div>
                <ButtonLink
                  text="Try a tutorial"
                  link="https://www.youtube.com/playlist?list=PLtgXvHMJ2nYKco68-NzWWI0PnjZGAc9I2"
                  className="w-full text-center"
                ></ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative md:-top-6 md:mb-10">
        <GhostParty />
      </div>
      <Container>
        <h2 className="title-m font-glitched md:title-l mb-14">Where we are</h2>

        <div className="grid grid-cols-3 gap-5 lg:gap-8 mb-16">
          <ToolBox
            title="Discord"
            text="Hangout, chat, get support, suggest new content and art - we're all here!"
            link="https://vega.xyz/discord"
            icon={getImage(data.iconDiscord)}
          />
          <ToolBox
            title="Forum"
            text="Discuss governance and governance proposals on Vega Networks"
            link="https://community.vega.xyz/c/governance/25"
            icon={getImage(data.iconForum)}
          />
          <ToolBox
            title="Telegram"
            text="Official Telegram Group for Vega Protocol"
            link="https://t.me/vegacommunity/"
            icon={getImage(data.iconTelegram)}
          />
          <ToolBox
            title="Twitter"
            text="@vegaprotocol"
            link="https://twitter.com/vegaprotocol"
            icon={getImage(data.iconTwitter)}
          />
          <ToolBox
            title="Substack"
            text="Roll up! Roll up! Vega's bi-weekly highlights newsletter"
            link="https://vegacommunity.substack.com/subscribe"
            icon={getImage(data.iconSubstack)}
          />
          <ToolBox
            title="YouTube"
            text="Video tutorials, presentations, development updates, and milestones of the Vega project."
            link="https://www.youtube.com/vegaprotocol"
            icon={getImage(data.iconYouTube)}
          />
          <ToolBox
            title="Twitch"
            text="Weekly live-streams, Thursdays 6pm BST/UTC+1!"
            link="https://www.twitch.tv/vegaprotocol"
            icon={getImage(data.iconTwitch)}
          />
          <ToolBox
            title="Medium"
            text="Blog"
            link="https://medium.com/@Vega_Protocol"
            icon={getImage(data.iconMedium)}
          />
        </div>

        <Callout
          title="Upcoming events"
          text="Livestreams, conferences, research office hours and community calls"
          linkText="Events and meetups"
          link="/community/events"
        />

        <h2 className="title-m font-glitched md:title-l mb-14">
          Contribute and get rewarded
        </h2>

        <div className="grid grid-cols-3 gap-5 lg:gap-8 mb-16">
          <ToolBox
            title="Ambassador program"
            text="Leading community members share what we're building with those that need to hear it — and get rewarded."
            link="/community/ambassadors/"
            icon={getImage(data.iconAmbassador)}
          />
          <ToolBox
            title="Builders Club"
            text="For developers, coders, hackers, dreamers who want to create software on top of Vega."
            link="https://vega.xyz/discord/"
            icon={getImage(data.iconBuildersClub)}
          />
          <ToolBox
            title="Feedback"
            text="Feedback and feature requests on Github"
            link="https://github.com/vegaprotocol/vega/issues"
            icon={getImage(data.iconFeedback)}
          />
          <ToolBox
            title="Github"
            text="Contribute to the source code, and get building with our APIs."
            link="https://github.com/vegaprotocol/"
            icon={getImage(data.iconGithub)}
          />
          <ToolBox
            title="Docs"
            text="Share feedback, make suggestions and help translate."
            link="https://docs.vega.xyz/"
            icon={getImage(data.iconDocs)}
          />
        </div>

        <Callout
          title="Incentives"
          text="Get rewarded for your efforts testing the network"
          linkText="Earn rewards"
          link="/community/incentives"
        />
      </Container>
      <Fairground />
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
    iconDiscord: file(relativePath: { eq: "social-icons/discord.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconForum: file(relativePath: { eq: "social-icons/forum.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTelegram: file(relativePath: { eq: "social-icons/telegram.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTwitter: file(relativePath: { eq: "social-icons/twitter.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconSubstack: file(relativePath: { eq: "social-icons/substack.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconYouTube: file(relativePath: { eq: "social-icons/youtube.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTwitch: file(relativePath: { eq: "social-icons/twitch.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconMedium: file(relativePath: { eq: "social-icons/medium.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconAmbassador: file(
      relativePath: { eq: "contribute-icons/ambassador.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconBuildersClub: file(
      relativePath: { eq: "contribute-icons/builders-club.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconFeedback: file(relativePath: { eq: "contribute-icons/feedback.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconGithub: file(relativePath: { eq: "contribute-icons/github.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconDocs: file(relativePath: { eq: "contribute-icons/docs.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
