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
import { getImage } from 'gatsby-plugin-image'
import AmbassadorsHero from '../../components/Svg/Ambassadors/Responsive'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import AmbassadorLeaderboard from '../../components/AmbassadorLeaderboard'

const Clan = ({ icon, title, text }) => {
  return (
    <div className="mb-6 flex items-center gap-6">
      <img src={icon} width="93" height="93" alt="" className="shrink-0" />
      <div>
        <h3 className="title-s md:title-m mb-2">{title}</h3>
        <p className="copy-xxs md:copy-xs !mb-0">{text}</p>
      </div>
    </div>
  )
}

const Ambassadors = ({ data }) => {
  const { i18n, t } = useTranslation('page.community.ambassadors')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const benefits = [
    t(
      'Gain real-world experience in community building by shaping the Vega movement from the ground up'
    ),
    t('Access to exclusive Discord lounges'),
    t('Early access to bounties, beta testing of products'),
    t('Priority consideration on protocol feedback'),
    t(
      "Exclusive meetups - Invitations to all of Vega's events, both offline and online"
    ),
    t('Limited edition Vega swag'),
    t('Grow with Vega - scaling rewards as you climb the ranks'),
  ]

  return (
    <Layout>
      <Seo
        title={t('Be a Vega+ Ambassador')}
        description={t(
          'Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to be a driving force of the Vega community.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div dataCy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container>
          <div className="mx-auto mb-space-10 max-w-[21.25rem] text-center md:max-w-[40rem] lg:max-w-[80rem]">
            <Tag className="mb-space-4">
              <Trans t={t}>Develop</Trans>
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

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
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
              <Button to="/">
                <Trans t={t}>Apply now</Trans>
              </Button>
            </TeamTile>

            <TeamTile
              title={t('Content collective')}
              body={t(
                'Get support building on top of the Vega protocol and access exclusive builder club bounties.'
              )}
              image={getImage(data.iconBuildersClub)}
            >
              <div className="heading-xxs font-not-glitched mb-space-5 uppercase">
                <Trans t={t}>
                  Vega capsule / Docs / Hackathons / Coding support
                </Trans>
              </div>
              <Button to="/" className="mr-space-6">
                <Trans t={t}>Apply now</Trans>
              </Button>
              <Button to="/" variant="secondary" className="mt-space-3">
                <Trans t={t}>See what's going on</Trans>
              </Button>
            </TeamTile>
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
  }
`
