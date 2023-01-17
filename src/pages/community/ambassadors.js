import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import GlitchTitle from '../../components/UI/GlitchTitle'
import Tag from '../../components/UI/Tag'
import TeamTile from '../../components/UI/TeamTile'
import Button from '../../components/UI/Button'
import NumberedListItem from '../../components/UI/NumberedListItem'
import CalloutTile from '../../components/UI/CalloutTile'
import ActionButton from '../../components/UI/ActionButton'
import { getImage } from 'gatsby-plugin-image'
import AmbassadorsHero from '../../components/Svg/Ambassadors/Hero/Responsive'
import AmbassadorsFooter from '../../components/Svg/Ambassadors/Footer/Responsive'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import AmbassadorLeaderboard from '../../components/AmbassadorLeaderboard'
import IconTick from '../../images/icons/tick.svg'
import IconPeople from '../../images/icons/people.svg'
import IconStairs from '../../images/icons/stairs.svg'
import IconAlert from '../../images/icons/alert.svg'
import IconDiscord from '../../images/icons/discord.svg'

const Ambassadors = ({ data }) => {
  const { i18n, t } = useTranslation('page.community.ambassadors')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Be a Vega+ Ambassador')}
        description={t(
          'Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to be a driving force of the Vega community.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div data-cy="main" className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container>
          <div className="mx-auto mb-space-10 max-w-[21.25rem] text-center md:max-w-[40rem] lg:max-w-[80rem]">
            <Tag className="mb-space-4">
              <Trans t={t}>Contribute</Trans>
            </Tag>
            <h1 className="heading-xxl mb-space-5">
              <GlitchTitle color="purple">
                <Trans t={t}>Be a Vega+ Ambassador</Trans>
              </GlitchTitle>
            </h1>
            <div className="body-xl mx-auto mb-space-5 max-w-[47.5rem] text-center text-current">
              <Trans t={t}>
                Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to
                be a driving force of the Vega community.
              </Trans>
            </div>
          </div>
        </Container>

        <div className="mx-auto mb-space-10 max-w-[72.5rem] md:mb-space-11 lg:mb-space-13">
          <AmbassadorsHero />
        </div>

        <Container>
          <h2 className="heading-xl mb-space-7 text-center md:mb-space-8 lg:mb-space-9">
            <Trans t={t}>Join a team</Trans>
          </h2>

          <div className="mb-space-10 grid grid-cols-1 gap-space-5 md:mb-space-11 md:grid-cols-2 md:gap-space-7 lg:mb-space-13">
            <TeamTile
              title={t('Content collective')}
              body={t(
                'Join the team creating non-technical content and designs for exclusive bounties.'
              )}
              image={getImage(data.iconContentCollective)}
            >
              <div className="heading-xxs font-not-glitched mb-space-5 uppercase">
                <Trans t={t}>
                  Tweets / Translations / Editorials / Infographics
                </Trans>
              </div>
              <Button to="https://vegaprotocol.typeform.com/ambassadorappq4">
                <Trans t={t}>Apply now</Trans>
              </Button>
            </TeamTile>

            <TeamTile
              title={t('Builders Club')}
              body={t(
                'Get support building on top of the Vega protocol and access exclusive builder club bounties.'
              )}
              image={getImage(data.iconBuildersClub)}
            >
              <div className="heading-xxs font-not-glitched mb-space-5 uppercase">
                <Trans t={t}>Docs / Hackathons / Coding support</Trans>
              </div>
              <Button
                to="https://vegaprotocol.typeform.com/ambassadorappq4"
                className="mr-space-6"
              >
                <Trans t={t}>Apply now</Trans>
              </Button>
              <Button
                to="/builders-club"
                variant="secondary"
                className="mt-space-3"
              >
                <Trans t={t}>See what's going on</Trans>
              </Button>
            </TeamTile>

            <div className="col-span-1 flex justify-center md:col-span-2">
              <div className="md:w-1/2">
                <TeamTile
                  title={t('Multilingual League')}
                  body={t(
                    'Be a part of the language specialists helping to make Vega accessible to more people across the globe.'
                  )}
                  image={getImage(data.iconMultilingualLeague)}
                >
                  <div className="heading-xxs font-not-glitched mb-space-5 uppercase">
                    <Trans t={t}>
                      Internationalisation / Local Language Groups / AMAs
                    </Trans>
                  </div>
                  <Button to="https://vegaprotocol.typeform.com/ambassadorappq4">
                    <Trans t={t}>Apply now</Trans>
                  </Button>
                </TeamTile>
              </div>
            </div>
          </div>

          <div className="mb-space-10 max-w-[47.5rem] md:mx-auto md:mb-space-11 lg:mb-space-13">
            <h2 className="heading-l mb-space-6">
              <Trans t={t}>Benefits of being an ambassador</Trans>
            </h2>
            <div className="body-l mb-space-6 text-vega-light-400 dark:text-vega-dark-400">
              <Trans t={t}>
                Vega+ Ambassadors are a valued extension of the team, and work
                closely with core Vega members.
              </Trans>
            </div>

            <div className="mb-space-4 border-t md:mb-space-11 lg:mb-space-13">
              <NumberedListItem
                number="1"
                text={t(
                  'Gain real-world experience in community building by shaping the Vega movement from the ground up'
                )}
              />
              <NumberedListItem
                number="2"
                text={t('Access to exclusive Discord lounges')}
              />
              <NumberedListItem
                number="3"
                text={t('Early access to bounties, beta testing of products')}
              />
              <NumberedListItem
                number="4"
                text={t('Priority consideration on protocol feedback')}
              />
              <NumberedListItem
                number="5"
                text={t(
                  "Exclusive meetups - Invitations to all of Vega's events, both offline and online"
                )}
              />
              <NumberedListItem
                number="6"
                text={t('Limited Edition Vega swag')}
              />
              <NumberedListItem
                number="7"
                text={t('Priority minting of NFT drops (+ enhanced rarities)')}
              />
              <NumberedListItem
                number="8"
                text={t(
                  'Grow with Vega - scaling rewards as you climb the ranks'
                )}
              />
            </div>
          </div>

          <div className="max-w-[47.5rem] md:mx-auto">
            <h2 className="heading-l mb-space-6">
              <Trans t={t}>Leaderboard</Trans>
            </h2>
            <div className="body-l mb-space-6 text-vega-light-400 dark:text-vega-dark-400">
              <Trans t={t}>
                We celebrate our ambassadors and their work. Complete tasks to
                top the leaderboard, rise up the ranks, and see your name here!
              </Trans>
            </div>

            <div className="mb-space-4 md:mb-space-11 lg:mb-space-13">
              <AmbassadorLeaderboard limit={8} />
            </div>
          </div>

          <div className="mb:space-8 mb-space-7 max-w-[47.5rem] text-center md:mx-auto lg:mb-space-9">
            <h2 className="heading-l mb-space-6">
              <Trans t={t}>Expectations</Trans>
            </h2>
            <div className="body-l text-vega-light-400 dark:text-vega-dark-400">
              <Trans t={t}>
                There are no exact requirements to being an ambassador; the
                extent of what you'll work on will depend on your team and role.
                Nevertheless, these are the non-negotiables:
              </Trans>
            </div>
          </div>
          <div className="mb-space-10 grid grid-cols-2 gap-space-3 gap-y-space-6 md:mb-space-11 md:grid-cols-3 md:gap-x-space-7 md:gap-y-space-7 lg:mb-space-13 lg:gap-x-space-7 lg:gap-y-space-9">
            <CalloutTile
              icon={IconTick}
              title={t('Agree with the code of conduct; keep to the rules')}
            />
            <CalloutTile
              icon={IconPeople}
              title={t(
                'Attend most meetings with other ambassadors, engage with your team'
              )}
            />
            <CalloutTile
              icon={IconStairs}
              title={t(
                'Learn with the core team: attend office hours, ask questions, grow'
              )}
            />
            <CalloutTile
              icon={IconAlert}
              title={t(
                "Let us know when things aren't working for you, if you need a break, that's okay!"
              )}
            />
            <CalloutTile
              icon={IconDiscord}
              title={t(
                'Be active on Discord - most communication will take place there'
              )}
            />
          </div>

          <div className="mx-auto mb-space-7 max-w-[47.5rem] md:mb-space-10 lg:mb-space-11">
            <AmbassadorsFooter />
          </div>

          <h2 className="heading-xl mx-auto max-w-[45rem] text-center">
            <GlitchTitle color="blue">
              <Trans t={t}>Join the community</Trans>
            </GlitchTitle>
          </h2>
          <div className="mx-auto mt-12 mb-space-8 grid max-w-[50rem] grid-cols-2 gap-space-4 md:mb-space-10 md:grid-cols-3 md:gap-x-5 md:gap-y-4 lg:mb-space-11">
            <ActionButton to="https://vega.xyz/discord">
              <Trans t={t}>Discord</Trans>
            </ActionButton>
            <ActionButton to="https://t.me/vegacommunity/">
              <Trans t={t}>Telegram</Trans>
            </ActionButton>
            <ActionButton to="https://github.com/vegaprotocol/">
              <Trans t={t}>Github</Trans>
            </ActionButton>
            <ActionButton to="https://docs.vega.xyz/">
              <Trans t={t}>Mainnet Docs</Trans>
            </ActionButton>
            <ActionButton to="https://docs.fairground.vega.xyz/">
              <Trans t={t}>Fairground Docs</Trans>
            </ActionButton>
            <ActionButton to="https://twitter.com/vegaprotocol">
              <Trans t={t}>Twitter</Trans>
            </ActionButton>
            <ActionButton to="https://community.vega.xyz/">
              <Trans t={t}>Forum</Trans>
            </ActionButton>
            <ActionButton to="https://www.youtube.com/vegaprotocol/">
              <Trans t={t}>YouTube</Trans>
            </ActionButton>
            <ActionButton to="https://www.twitch.tv/vegaprotocol/">
              <Trans t={t}>Twitch</Trans>
            </ActionButton>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Ambassadors

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
    iconContentCollective: file(
      relativePath: { eq: "content-collective-icon.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconBuildersClub: file(relativePath: { eq: "builders-club-icon.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconMultilingualLeague: file(
      relativePath: { eq: "icon-ambassador-4.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
