import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import ButtonLink from "../../components/ButtonLink";
import AmbassadorsHero from "../../components/Svg/AmbassadorsHero";
import IconAmbassador1 from "../../images/icon-ambassador-1.png";
import IconAmbassador2 from "../../images/icon-ambassador-2.png";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import AmbassadorLeaderboard from "../../components/AmbassadorLeaderboard";

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
  "Gain real-world experience in community building by shaping the Vega movement from the ground up",
  "Access to exclusive Discord lounges",
  "Early access to bounties, beta testing of products",
  "Priority consideration on protocol feedback",
  "Exclusive meetups - Invitations to all of Vega's events, both offline and online",
  "Limited edition Vega swag",
  "Priority minting of NFT drops (+ enhanced rarities)",
  "Grow with Vega - scaling rewards as you climb the ranks",
];

// t("Gain real-world experience in community building by shaping the Vega movement from the ground up"),
// t("Access to exclusive Discord lounges"),
// t("Early access to bounties, beta testing of products"),
// t("Priority consideration on protocol feedback"),
// t("Exclusive meetups - Invitations to all of Vega's events, both offline and online"),
// t("Limited edition Vega swag"),
// t("Priority minting of NFT drops (+ enhanced rarities)"),
// t("Grow with Vega - scaling rewards as you climb the ranks"),

const Ambassadors = () => {
  const { i18n, t } = useTranslation("page.community.ambassadors");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  return (
    <Layout>
      <Seo
        title={t("Be a Vega+ Ambassador")}
        description={t(
          "Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to be a driving force of the Vega community."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container>
        <div className="max-w-[21.25rem] md:max-w-[40rem] lg:max-w-[80rem] mx-auto text-center md:mb-12 pt-6 lg:pt-16">
          <GlitchTitle
            level={1}
            className="mb-4 title-m md:title-xxl lg:title-xxxl md:mb-6"
          >
            <Trans t={t}>Be a Vega+ Ambassador</Trans>
          </GlitchTitle>
          <LeadingLine className="text-center text-current mx-auto max-w-[35rem]">
            <Trans t={t}>
              Seeking emissaries of the future to co-create the leading crypto
              derivatives layer.
            </Trans>
          </LeadingLine>
        </div>
      </Container>

      <Container hideXOverflow={true}>
        <div className="max-w-[55.5rem] mx-auto mb-6 md:mb-16">
          <AmbassadorsHero className="scale-125 my-12 md:my-0 md:scale-100" />
        </div>
      </Container>

      <Container dataCy={"main"}>
        <div className="md:grid md:grid-cols-12 md:gap-x-12 lg:gap-x-6">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4">
                <Trans t={t}>Overview</Trans>
              </h2>
              <LeadingLine className="text-current">
                <Trans t={t}>
                  Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you
                  to be a driving force of the Vega community.
                </Trans>
              </LeadingLine>
              <p className="copy-xs">
                <Trans t={t}>
                  You'll already be passionate about blockchain technologies,
                  with a willingness to learn the ins and outs of Vega. A
                  penchant for original thinking. And an appetite to share, as
                  you drive conversations and engagement in pursuit of vibrancy
                  within the community.
                </Trans>
              </p>
              <p className="copy-xs">
                <Trans t={t}>
                  Apply now to bring fresh proposals to the table and
                  participate in the community as a key contributor.
                </Trans>
              </p>

              <ButtonLink
                link="https://form.typeform.com/to/lPl6aiNh"
                text={t("Apply now")}
                className="md:hidden mt-3"
              />
            </div>

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4 max-w-[20rem] md:max-w-none">
                <Trans t={t}>Which Vega+ Team would you rally?</Trans>
              </h2>
              <div className="mt-6 md:mt-12">
                <Clan
                  title={t("Content Collective (Non-Technical)")}
                  text={t(
                    "(Tweets, Translations, Editorials, Infographics, Bounties)"
                  )}
                  icon={IconAmbassador1}
                />
                <Clan
                  title={t("Builders Club (Technical)")}
                  text={t(
                    "(Vega Capsule, Documentation, Hackathon Support, Coding)"
                  )}
                  icon={IconAmbassador2}
                />
                {/* <Clan
                  title="Research & Finance Circle"
                  text="(Deeper Research, Protocol Comparisons, Protocol Integrations)"
                  icon={IconAmbassador3}
                /> */}
              </div>
            </div>

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4 max-w-[20rem] md:max-w-none">
                <Trans t={t}>Benefits of being an ambassador</Trans>
              </h2>
              <p className="copy-xs md:copy-s text-current">
                <Trans t={t}>
                  Vega+ Ambassadors are a valued extension of the team, and work
                  closely with core Vega members. Here's a taste of what you can
                  look forward to:
                </Trans>
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
                        {t(benefit)}
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

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4">
                <Trans t={t}>Leaderboard</Trans>
              </h2>
              <p className="copy-s">
                <Trans t={t}>
                  We celebrate our ambassadors and their work. Complete tasks to
                  top the leaderboard, rise up the ranks, and see your name
                  here!
                </Trans>
              </p>
              <div className="py-6">
                <AmbassadorLeaderboard limit={5} />
              </div>
            </div>

            <div className="mb-12 md:mb-20">
              <h2 className="title-s md:title-l mb-4">
                <Trans t={t}>Expectations</Trans>
              </h2>
              <p className="copy-xs md:copy-s text-current mb-8">
                <Trans t={t}>
                  There are no exact requirements to being an ambassador; the
                  extent of what you'll work on will depend on your team and
                  role. Nevertheless, these are the non-negotiables:
                </Trans>
              </p>
              <div className="prose-xl dark:text-white">
                <ul className="list-disc copy-xs md:copy-s mt-8 md:mt-12">
                  <li>
                    <Trans t={t}>
                      Agree with the code of conduct; keep to the rules
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Attend most meetings with other ambassadors, engage with
                      your team
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Learn with the core team: attend office hours, ask
                      questions, grow
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Let us know when things aren't working for you, if you
                      need a break, that's okay!
                    </Trans>
                  </li>
                  <li>
                    <Trans t={t}>
                      Be active on Discord - most communication will take place
                      there
                    </Trans>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="hidden md:block md:col-span-4 lg:col-span-4 mb-20">
            <div className="sticky top-6">
              <div className="title-s mb-3">
                <Trans t={t}>Interested in joining?</Trans>
              </div>
              <p className="copy-xs text-current">
                <Trans t={t}>
                  Become one with Vega. Learn, create, and help grow Vega to be
                  a leading derivatives Layer 1 in the crypto space
                </Trans>
              </p>
              <BoxLinkSimple
                link="https://vegaprotocol.typeform.com/ambassadorappQ2"
                text={t("Apply now")}
                className="mt-4 min-w-[15rem] text-left hidden md:inline-block"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 mb-16">
          <div className="text-center">
            <GlitchTitle
              color="red"
              level="2"
              className="mb-4 title-m md:title-l lg:title-xxl md:max-w-[35rem] mx-auto"
            >
              <Trans t={t}>Join the community</Trans>
            </GlitchTitle>
          </div>

          <div className="max-w-[50rem] grid gap-4 grid-cols-2 mt-12 mx-auto md:grid-cols-3">
            <BoxLinkSimple
              text={t("Discord")}
              link="https://vega.xyz/discord"
            />
            <BoxLinkSimple
              text={t("Telegram")}
              link="https://t.me/vegacommunity/"
            />

            <BoxLinkSimple
              text={t("Github")}
              link="https://github.com/vegaprotocol/"
            />
            <BoxLinkSimple
              text={t("Mainnet Docs")}
              link="https://docs.vega.xyz/"
            />
            <BoxLinkSimple
              text={t("Fairground Docs")}
              link="https://docs.fairground.vega.xyz/"
            />
            <BoxLinkSimple
              text={t("Twitter")}
              link="https://twitter.com/vegaprotocol"
            />
            <BoxLinkSimple
              text={t("Forum")}
              link="https://community.vega.xyz/"
            />
            <BoxLinkSimple
              text={t("YouTube")}
              link="https://www.youtube.com/vegaprotocol/"
            />
            <BoxLinkSimple
              text={t("Twitch")}
              link="https://www.twitch.tv/vegaprotocol/"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Ambassadors;

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
