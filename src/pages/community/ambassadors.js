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
import LeadingLine from '../../components/LeadingLine'
import BoxLinkSimple from '../../components/BoxLinkSimple'
import ButtonLink from '../../components/ButtonLink'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import AmbassadorsHero from '../../components/Svg/AmbassadorsHero'
import IconAmbassador1 from '../../images/icon-ambassador-1.png'
import IconAmbassador2 from '../../images/icon-ambassador-2.png'
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
      <Container>
        <div className="mx-auto max-w-[21.25rem] text-center md:max-w-[40rem] lg:max-w-[80rem]">
          <Tag className="mb-space-4">
            <Trans t={t}>Develop</Trans>
          </Tag>
          <h1 className="heading-xxl mb-space-5">
            <Trans t={t}>
              <GlitchTitle color="purple">
                <Trans t={t}>Be a Vega+ Ambassador</Trans>
              </GlitchTitle>
            </Trans>
          </h1>
          <div className="body-xl mx-auto mb-space-5 max-w-[47.5rem] text-center text-current">
            <Trans t={t}>
              Knowledgeable in cryptocurrencies, DeFi and DAOs? We want you to
              be a driving force of the Vega community.
            </Trans>
          </div>
        </div>

        <div className="mb:mb-space-5 mx-auto mb-space-10 max-w-[55.5rem] lg:mb-space-13">
          <AmbassadorsHero className="my-12 scale-125 md:my-0 md:scale-100" />
        </div>

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
      </Container>

      <Container dataCy={'main'}></Container>
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
