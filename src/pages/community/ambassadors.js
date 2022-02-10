import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import ButtonLink from "../../components/ButtonLink";
import AmbassadorsHero from "../../components/Svg/AmbassadorsHero";
import IconAmbassador1 from "../../images/icon-ambassador-1.png";
import IconAmbassador2 from "../../images/icon-ambassador-2.png";
import IconAmbassador3 from "../../images/icon-ambassador-3.png";
import IconAmbassador4 from "../../images/icon-ambassador-4.png";

const Clan = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-6 mb-6">
      <img src={icon} width="93" height="93" alt="" className="shrink-0" />
      <div>
        <h3 className="title-s md:title-m mb-2">{title}</h3>
        <p className="copy-xxs md:copy-xs !mb-0">{text}</p>
      </div>
    </div>
  );
};

const benefits = [
  "Access to Premium Discord Lounges (for those that make it past Apprentice)",
  "Gain real-world experience in community building by shaping the Vega movement from the ground up",
  "Early access to bounties, beta testing of products",
  "Priority consideration on protocol feedback",
  "Exclusive meetups - Invitations to all of Vega's events, both offline and online",
  "Limited Edition Vega Swag",
  "Priority minting of NFT drops (+ enhanced rarities)",
  "Grow with Vega - scaling rewards as you climb the ranks",
];

const Ambassadors = () => {
  return (
    <Layout>
      <Seo
        title="Be a Vega+ Ambassador"
        description="Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to be a driving force of the Vega community."
      />
      <Container>
        <div className="max-w-[21.25rem] md:max-w-[40rem] lg:max-w-[80rem] mx-auto text-center md:mb-12 pt-6 lg:pt-16">
          <GlitchTitle level={1} size="large" className="md:mb-6">
            Be a Vega+ ambassador
          </GlitchTitle>
          <LeadingLine className="text-center text-current mx-auto max-w-[35rem]">
            Seeking emissaries of the future to co-create the leading crypto
            derivatives layer.
          </LeadingLine>
        </div>
      </Container>

      <Container hideXOverflow={true}>
        <div className="max-w-[55.5rem] mx-auto mb-6 md:mb-16">
          <AmbassadorsHero className="scale-125 my-12 md:my-0 md:scale-100" />
        </div>
      </Container>

      <Container>
        <div className="md:grid md:grid-cols-12 md:gap-x-12 lg:gap-x-6">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4">Overview</h2>
              <LeadingLine className="text-current">
                Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to
                be a driving force of the Vega community.
              </LeadingLine>
              <p class="copy-xs">
                You'll already be passionate about blockchain technologies, with
                a willingness to learn the ins and outs of Vega. A penchant for
                original thinking. And an appetite to share, as you drive
                conversations and engagement in pursuit of vibrancy within the
                community.
              </p>
              <p class="copy-xs">
                Apply now to bring fresh proposals to the table and participate
                in the community as a key contributor.
              </p>

              <ButtonLink
                link="https://form.typeform.com/to/lPl6aiNh"
                text="Apply now"
                className="md:hidden mt-3"
              />
            </div>

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4 max-w-[20rem] md:max-w-none">
                Which Vega clan would you rally?
              </h2>
              <div className="mt-6 md:mt-12">
                <Clan
                  title="Content Cove"
                  text="(Awareness, Editorials, Tweets, Infographics)"
                  icon={IconAmbassador1}
                />
                <Clan
                  title="Builders Club"
                  text="(Technical Work, Hackathon Support, Coding, Documentation)"
                  icon={IconAmbassador2}
                />
                <Clan
                  title="Research & Finance Circle"
                  text="(Deeper Research, Protocol Comparisons, Protocol Integrations)"
                  icon={IconAmbassador3}
                />
                <Clan
                  title="Bilingual Buds"
                  text="(Translations, Language Groups, Specific Events, Vega Chapters)"
                  icon={IconAmbassador4}
                />
              </div>
            </div>

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4 max-w-[20rem] md:max-w-none">
                Benefits of being an ambassador
              </h2>
              <p className="copy-xs md:copy-s text-current">
                Vega+ Ambassadors are a valued extension of the team, and work
                closely with core Vega members. Here's a taste of what you can
                look forward to:
              </p>

              <div className="border-t border-current mt-8 md:mt-12 mb-4 md:mb-0">
                {benefits.map((benefit, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex text-current items-center border-b border-current py-3 md:py-6"
                    >
                      <div className="copy-m !mb-0 md:copy-l shrink-0 min-w-[3rem] md:min-w-[5rem]">
                        {idx + 1}
                      </div>
                      <div className="copy-xs md:copy-s text-current !mb-0">
                        {benefit}
                      </div>
                    </div>
                  );
                })}
              </div>

              <ButtonLink
                link="https://form.typeform.com/to/lPl6aiNh"
                text="Apply now"
                className="md:hidden mt-3"
              />
            </div>

            {/* <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4">Expectations</h2>
              <p className="copy-xs md:copy-s text-current">TBC</p>
            </div> */}
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="md:col-span-4 lg:col-span-4 mb-20">
            <div className="sticky top-6">
              <div className="title-s mb-3">Interested in joining?</div>
              <p class="copy-xs text-current">
                Become one with Vega. Learn, create, and help grow Vega to be a
                leading derivatives Layer 1 in the crypto space
              </p>
              <BoxLinkSimple
                link="https://form.typeform.com/to/lPl6aiNh"
                text="Apply <br/>now"
                className="mt-4 min-w-[15rem] text-left hidden md:inline-block"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20">
          <div className="text-center">
            <GlitchTitle
              color="red"
              level="2"
              size="medium"
              className="md:max-w-[35rem] mx-auto"
            >
              Join the community
            </GlitchTitle>
          </div>

          <div className="max-w-[50rem] grid gap-4 grid-cols-2 mt-12 mx-auto md:grid-cols-3">
            <BoxLinkSimple text="Discord" link="https://vega.xyz/discord" />
            <BoxLinkSimple text="Telegram" link="https://t.me/vegacommunity/" />

            <BoxLinkSimple
              text="Github"
              link="https://github.com/vegaprotocol/"
            />
            <BoxLinkSimple text="Mainnet Docs" link="https://docs.vega.xyz/" />
            <BoxLinkSimple
              text="Fairground Docs"
              link="https://docs.fairground.vega.xyz/"
            />
            <BoxLinkSimple
              text="Twitter"
              link="https://twitter.com/vegaprotocol"
            />
            <BoxLinkSimple text="Forum" link="https://community.vega.xyz/" />
            <BoxLinkSimple
              text="YouTube"
              link="https://www.youtube.com/vegaprotocol/"
            />
            <BoxLinkSimple
              text="Twitch"
              link="https://www.twitch.tv/vegaprotocol/"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Ambassadors;
